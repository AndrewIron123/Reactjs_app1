import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
function Sidebar() {
  const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false);
  const [categoriesError, setCategoriesError] = useState(null);
  const [categories, setCategories] = useState([]);

  const [isArticlesLoaded, setIsArticlesLoaded] = useState(false);
  const [articlesError, setArticlesError] = useState(null);
  const [articles, setArticles] = useState([]);

  const errorMessage = "Please check the connection to the api, in the folder \"json-mock-api\" please enter the command \"json-server --watch src/db.json\" - and then please refresh the page";
  const articleRefs = useRef({});
  const location = useLocation();

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
          alert(`Error - FetchArticles - ${errorMessage}`);
        }
      )
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
      articleRefs.current[id]?.classList.add('sidebar--dropdown__link--active');
    }
    return function handleUnmarkArticle() {
      if (articleRefs.current[id]) {
        articleRefs.current[id]?.classList.remove('sidebar--dropdown__link--active');
      }
    };
  });


  if (categoriesError || articlesError) {
    return (
      <span className="sidebar">
        <div>{errorMessage}</div>
      </span>
    );
  } else if (!isCategoriesLoaded || !isCategoriesLoaded) {
    return (
      <span className="sidebar">
        <div>Loading...</div>
      </span>
    );
  } else {
    return (
      <span className="sidebar">
        {
          categories.map((categoryElement) => {
            return (
              <div key={categoryElement.id} className="sidebar--element">
                <div className="sidebar--button">{categoryElement.name}</div>
                <div className="sidebar--dropdown__content">
                  {articles.map((articlesElement) => {
                    if (categoryElement.id === articlesElement.categoryId) {
                      return (
                        <Link key={articlesElement.id} to={`/article/${articlesElement.id}`} className="sidebar--dropdown__link" ref={(el) => articleRefs.current[articlesElement.id] = el}>
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

export default Sidebar;