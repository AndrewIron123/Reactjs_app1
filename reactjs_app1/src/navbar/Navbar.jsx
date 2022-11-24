import React from 'react';


class Navbar extends React.Component {
    constructor(props) {  
          super(props);
          //this.state = {stan: "przykladowy stan" };  
        }
    render() {
      return  (
        <div className="navbar">        
          <a href="#NavbarElement1" className="navbar__link">NavbarElement1</a>
          <a href="#NavbarElement2" className="navbar__link">NavbarElement2</a>
          <a href="#NavbarElement3" className="navbar__link">NavbarElement3</a>
        </div>    
      );
    }
  }
  export default Navbar;