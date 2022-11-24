import React from 'react';


class Sidebar extends React.Component {
    constructor(props) {  
          super(props);
          //this.state = {stan: "przykladowy stan" };  
        }
    render() {
      return  (
        <span className="sidebar">        
         <a href="#SidebarElement1">SidebarElement1</a>
         <a href="#SidebarElement2">SidebarElement2</a>
         <a href="#SidebarElement3">SidebarElement3</a>
         <a href="#SidebarElement4">SidebarElement4</a>
         <a href="#SidebarElement5">SidebarElement5</a>
         <a href="#SidebarElement6">SidebarElement6</a>
        </span>    
      );
    }
  }
  export default Sidebar;