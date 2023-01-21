import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Sidebar() {
  const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false);
  const [categoriesError, setCategoriesError] = useState(null);
  const [categories, setCategories] = useState([]);

  const [isArticlesLoaded, setIsArticlesLoaded] = useState(false);
  const [articlesError, setArticlesError] = useState(null);
  const [articles, setArticles] = useState([]);

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
        }
      )
  }


  useEffect(() => {
    handleFetchCategories();
    handleFetchArticles();
  }, []);

  if (categoriesError || articlesError) {
    return (
      <span className="sidebar">
        <div>No API</div>
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
          categories.map((arrElement) => {
            return (
              <div key={arrElement.id} className="sidebar--element">
                <div className="sidebar--button">{arrElement.name}</div>
                <div className="sidebar--dropdown__content">
                  <Link to="/" className="sidebar--dropdown__link">Home</Link>
                  <Link to="calendar" className="sidebar--dropdown__link">Make an appointment</Link>
                  <Link to="calendar" className="sidebar--dropdown__link">Make an appointment</Link>
                  <Link to="calendar" className="sidebar--dropdown__link">Make an appointment</Link>
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