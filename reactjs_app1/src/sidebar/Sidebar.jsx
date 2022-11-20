import React from 'react';


class Sidebar extends React.Component {
    constructor(props) {  
          super(props);
          //this.state = {stan: "przykladowy stan" };  
        }
    render() {
      return  (
        <span className="sidebar">        
        Jestem sidebarem.
        </span>    
      );
    }
  }
  export default Sidebar;