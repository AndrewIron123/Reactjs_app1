import Article from '../article/Article';
import React, { useState, useEffect } from 'react';

function HomePage() {
  const [data, setData] = useState({
    title: "",
    html: "",
    author: "",
    date: ""
  });
 
  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL_ARTICLES);
    const JSONFromAPI = '{"title":"simple title","html":"<div>simple text</div>", "author":"simple author", "date":"2022-12-20"}';
    const JSONAsJsObject = JSON.parse(JSONFromAPI);
    setData(JSONAsJsObject);
  }, []);


  
  return (
    <Article myHtml={data.html} myTitle={data.title} myAuthor={data.author} myDate={data.date} />
  );
}

  export default HomePage;