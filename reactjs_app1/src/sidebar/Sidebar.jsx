import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function Sidebar(props) {
  const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false);
  const [categoriesError, setCategoriesError] = useState(null);
  const [categories, setCategories] = useState([]);

  const [isArticlesLoaded, setIsArticlesLoaded] = useState(false);
  const [articlesError, setArticlesError] = useState(null);
  const [articles, setArticles] = useState([]);

  const errorMessage = "Please check the connection to the api, in the folder \"json-mock-api\" please enter the command \"json-server --watch src/db.json\" - and then please refresh the page";
  const articleRefs = useRef({});
  const categoryRefs = useRef({});
  const location = useLocation();

  const modeValue = useSelector(state => state.modeSwitch.mode);

  const loaders = [<div className="loader" />, <div className="loader-reverse" />];

  function handleFetchCategories() {
    fetch(process.env.REACT_APP_API_URL_CATEGORIES)
      .then(res => res.json())
      .then(
        (result) => {
          setIsCategoriesLoaded(true);
          setCategories(result);
        },
        (error) => {
          setIsCategoriesLoaded(true);
          setCategoriesError(error);
          alert(`Error - FetchCategories - ${errorMessage}`);
        }
      )
  }

  function handleFetchArticles() {
    fetch(process.env.REACT_APP_API_URL_ARTICLES)
      .then(res => res.json())
      .then(
        (result) => {
          setIsArticlesLoaded(true);
          setArticles(result);
        },
        (error) => {
          setIsArticlesLoaded(true);
          setArticlesError(error);
          // alert(`Error - FetchArticles - ${errorMessage}`);
        }
      )
  }

  function handleArticleDropDownOnMouseEnter(id) {
    categoryRefs.current[id]?.classList.add('sidebar__button--hover');
  }

  function handleArticleDropDownOnMouseLeave(id) {
    categoryRefs.current[id]?.classList.remove('sidebar__button--hover');
  }


  useEffect(() => {
    handleFetchCategories();
    handleFetchArticles();
  }, []);


  useEffect(() => {
    // Marking and unmarking an article depending on the url
    const locationPathNameAsArr = location.pathname.split("/");
    const id = locationPathNameAsArr[2];
    if (articleRefs.current[id]) {
      articleRefs.current[id]?.classList.add('sidebar__dropdown-link--active');
    }
    return function handleUnmarkArticle() {
      if (articleRefs.current[id]) {
        articleRefs.current[id]?.classList.remove('sidebar__dropdown-link--active');
      }
    };
  });

  function handleLoaders(number) {
    let loadersArr = [];

    for (let z = 0; z < number; z++) {
      if (z % 2 == 0) {
        loadersArr.push(<div key={z} className="loader"></div>);
      } else {
        loadersArr.push(<div key={z} className="loader-reverse"></div>);
      }
    }

    return loadersArr;
  }


  if (categoriesError || articlesError) {
    return (
      <span className={"sidebar" + (modeValue ? " dark" : "") + ` ${props.colClasses}`} />
    );
  } else if (!isCategoriesLoaded || !isArticlesLoaded) {
    return (
      <span className={"sidebar" + (modeValue ? " dark" : "") + ` ${props.colClasses}`}>
        <div className="sidebar__element loader__container">
          {
            handleLoaders(240)
          }
        </div>
      </span>
    );
  } else {
    return (
      <span className={"sidebar" + (modeValue ? " dark" : "") + ` ${props.colClasses}`}>
        {
          categories.map((categoryElement) => {
            return (
              <div key={categoryElement.id} className="sidebar__element">
                <div className="sidebar__button" ref={(el) => categoryRefs.current[categoryElement.id] = el}>{categoryElement.name}</div>
                <div className="sidebar__dropdown-content" onMouseEnter={() => handleArticleDropDownOnMouseEnter(categoryElement.id)} onMouseLeave={() => handleArticleDropDownOnMouseLeave(categoryElement.id)}>
                  {articles.map((articlesElement) => {
                    if (categoryElement.id === articlesElement.categoryId) {
                      return (
                        <Link key={articlesElement.id} to={`/article/${articlesElement.id}`} className="sidebar__dropdown-link" ref={(el) => articleRefs.current[articlesElement.id] = el}>
                          {articlesElement.title}
                        </Link>
                      );
                    }
                  })}
                </div>
              </div>
            )
          })
        }
      </span>
    );
  }
}

Sidebar.propTypes = {
  colClasses: PropTypes.string
}

Sidebar.defaultProps = {
  colClasses: ""
}

export default Sidebar;