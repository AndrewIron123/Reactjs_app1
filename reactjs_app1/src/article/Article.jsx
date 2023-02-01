import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Article(props) {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    id: 1,
    title: "",
    html: "",
    author: "",
    date: ""
  });
  const params = useParams();
  const errorMessage = "Please check the connection to the api, in the folder \"json-mock-api\" please enter the command \"json-server --watch src/db.json\" - and then please refresh the page";
  const modeValue = useSelector(state => state.modeSwitch.mode);

  function handleFetchArticle() {
    if (params && params.articleId) {
      fetch(`${process.env.REACT_APP_API_URL_ARTICLES}/${params.articleId}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsDataLoaded(true);
            setData(result);
          },
          (error) => {
            setIsDataLoaded(true);
            setError(error);
            alert(`Error - FetchArticle - ${errorMessage}`);
          }
        )
    }
  }

  useEffect(() => {
    handleFetchArticle();
  }, [params.articleId]);


  if (error) {
    return <div className={"page" + (modeValue ? " dark" : "")}>{errorMessage}</div>;
  } else if (!isDataLoaded) {
    return <div className={"page" + (modeValue ? " dark" : "")}>Loading...</div>;
  } else {
    return (
      <>
        <div className={"article"+ (modeValue ? " dark" : "")} dangerouslySetInnerHTML={{ __html: data.html }} />
        <div className={"article__footer"+ (modeValue ? " dark" : "")}>
          <div className="article__footer_title">
            Title: {data.title}
          </div>
          <div className="article__footer_author">
            Author: {data.author}
          </div>
          <div className="article__footer_date">
            Date: {data.date}
          </div>
        </div>
      </>
    );
  }
}


export default Article;