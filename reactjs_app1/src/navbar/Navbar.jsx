import React from 'react';


class Navbar extends React.Component {
    constructor(props) {  
          super(props);
          //this.state = {stan: "przykladowy stan" };  
        }
    render() {
      return  (
        <div className="navbar">        
          <a href="#NavbarElement1">NavbarElement1</a>
          <a href="#NavbarElement2">NavbarElement2</a>
          <a href="#NavbarElement3">NavbarElement3</a>
        </div>    
      );
    }
  }
  export default Navbar;