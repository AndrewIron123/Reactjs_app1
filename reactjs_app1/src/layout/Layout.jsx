import React from 'react';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import Content from '../content/Content';


const Layout = ({ children }) => {
    return (
        <>
            <div className="row">
                <Navbar colClasses="col-12 col-s-12 col-m-10 col-l-10 col-xl-11" />
            </div>
            <div className="row">
                <Sidebar colClasses="col-12 col-s-12 col-m-2 col-l-2 col-xl-1" />
                <Content colClasses="col-11 col-s-11 col-m-10 col-l-10 col-xl-11">
                    {children}
                </Content>
            </div>
        </>
    );
};
export default Layout;