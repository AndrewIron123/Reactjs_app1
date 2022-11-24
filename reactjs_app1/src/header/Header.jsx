import React from 'react';
import Navbar from '../navbar/Navbar';


class Header extends React.Component {
    constructor(props) {  
          super(props);
          //this.state = {stan: "przykladowy stan" };  
        }
    render() {
      return  (
        <div className="header">        
          <Navbar />
        </div>    
      );
    }
  }
  export default Header;