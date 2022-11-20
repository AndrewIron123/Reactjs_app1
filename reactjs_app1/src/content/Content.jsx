import React from 'react';


class Content extends React.Component {
    constructor(props) {  
          super(props);
          //this.state = {stan: "przykladowy stan" };  
        }
    render() {
      return  (
        <span className="content">        
        Jestem contentem.
        </span>   
      );
    }
  }
  export default Content;