import React from 'react';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import Content from '../content/Content';


const Layout = ({ children }) => {
    return (
    <>
        <Navbar />
        <Sidebar />
        <Content>
            {children}
        </Content>
    </>
    );
};
export default Layout;