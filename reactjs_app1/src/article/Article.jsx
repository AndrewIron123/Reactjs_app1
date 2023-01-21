import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';


function Article(props) {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    title: "",
    html: "",
    author: "",
    date: ""
  });
  const params = useParams();
  const errorMessage = "Please check the connection to the api, in the folder \"json-mock-api\" please enter the command \"json-server --watch src/db.json\" - and then please refresh the page";


  useEffect(() => {
    console.log(params);
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
          }
        )
    }
  }, []);


  if (error) {
    return <div className="page" style="font-weight: bold;color: red;">{errorMessage}</div>;
  } else if (!isDataLoaded) {
    return <div className="page">Loading...</div>;
  } else {
    return (
      <>
        <div className={"article"} dangerouslySetInnerHTML={{ __html: data.html }} />
        <div className="article__footer">
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

Article.propTypes = {
  myHtml: PropTypes.string,
  myTitle: PropTypes.string,
  myAuthor: PropTypes.string,
  myDate: PropTypes.string,
  myClass: PropTypes.string
}

Article.defaultProps = {
  myHtml: "",
  myTitle: "",
  myAuthor: "",
  myDate: "",
  myClass: ""
}

export default Article;