import Article from '../article/Article';
import React, { useState, useEffect } from 'react';

function HomePage() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    title: "",
    html: "",
    author: "",
    date: ""
  });
  const errorMessage = "Please check the connection to the api, in the folder \"json-mock-api\" please enter the command \"json-server --watch src/db.json\" - and then please refresh the page";


  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL_ARTICLES}/1`)
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
  }, []);


  if (error) {
    // return <Article myHtml={`<div>${error.message}</div>`} myTitle={data.title} myAuthor={data.author} myDate={data.date} />;
    return <Article myHtml={`<div style="font-weight: bold;color: red;">${errorMessage}</div>`} myTitle={data.title} myAuthor={data.author} myDate={data.date} />;
  } else if (!isDataLoaded) {
    return <Article myHtml={"<div>Loading...</div>"} myTitle={data.title} myAuthor={data.author} myDate={data.date} />;
  } else {
    return (
      <Article myHtml={data.html} myTitle={data.title} myAuthor={data.author} myDate={data.date} />
    );
  }
}

export default HomePage;