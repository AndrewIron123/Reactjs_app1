import React from 'react';
import {Link} from 'react-router-dom';


class Navbar extends React.Component {
    constructor(props) {  
          super(props);
          //this.state = {stan: "przykladowy stan" };  
        }
    render() {
      return  (
        <div className="navbar">    
          <Link to="/" className="navbar__link">Home</Link>    
          <Link to="/calendar" className="navbar__link">Make an appointment</Link>
          {/* <a href="#NavbarElement1" className="navbar__link">NavbarElement1</a>
          <a href="#NavbarElement2" className="navbar__link">NavbarElement2</a>
          <a href="#NavbarElement3" className="navbar__link">NavbarElement3</a> */}
        </div>    
      );
    }
  }
  export default Navbar;