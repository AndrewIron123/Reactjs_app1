import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


function Article(props) {
    
    // const [simpleState, setSimpleState] = useState("Stan początkowy");

    // useEffect(() => {    
        
    // });
    console.log(props);

    return (
      <>
        <div className={"page "+props.myclass} dangerouslySetInnerHTML={{__html: props.myHtml}} />
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