import React from 'react';
import PropTypes from 'prop-types';


const Content = (props) => {
  return (
    <div className={props.colClasses}>
      {props.children}
    </div>
  );
};

Content.propTypes = {
  colClasses: PropTypes.string
}

Content.defaultProps = {
  colClasses: ""
}

export default Content;