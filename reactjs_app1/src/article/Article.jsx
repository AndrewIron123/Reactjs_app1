import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


function Article(props) {
    
    // const [simpleState, setSimpleState] = useState("Stan początkowy");

    // useEffect(() => {    
        
    // });
    console.log(props);

    return (
      <>
        <div className={"article" + (props.myClass ? (" "+ props.myClass) : "")} dangerouslySetInnerHTML={{__html: props.myHtml}} />
        <div className="article__footer">
          <div className="article__footer_title">
            Title: {props.myTitle}
          </div>
          <div className="article__footer_author">
            Author: {props.myAuthor}
          </div>
          <div className="article__footer_date">
            Date: {props.myDate}
          </div>
        </div>
      </>
    );
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