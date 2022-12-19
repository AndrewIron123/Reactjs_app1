import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


function Article(props) {
    
    // const [simpleState, setSimpleState] = useState("Stan początkowy");

    // useEffect(() => {    
        
    // });

    return (
        <span className={"page "+props.myclass}>
            {props.content}
        </span>
    );
  }

  Article.propTypes = {
    content: PropTypes.object,
    myclass: PropTypes.string

  }

  Article.defaultProps = {
    content: {},
    myclass: ""
  }

  export default Article;