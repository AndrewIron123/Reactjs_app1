import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import Content from '../content/Content';
import { FcMenu } from "react-icons/fc";



function Layout({ children }) {
    const [mobileMenuExpended, setMobileMenuExpended] = useState(false);

    function handleExpendMobileMenu() {
        setMobileMenuExpended(!mobileMenuExpended);
    }

    return (
        <>
            <div className={"mobile__navbar row" + (mobileMenuExpended ? " responsive" : "")}>
                <div className="mobile__iconbar">
                    <div className="icon" onClick={() => handleExpendMobileMenu()}>
                        <FcMenu />
                    </div>
                </div>
                <div onClick={() => handleExpendMobileMenu()}>
                    <Navbar colClasses="col-12 col-s-12 col-m-10 col-l-10 col-xl-11" mobileMenuExpended={mobileMenuExpended} />
                    <Sidebar colClasses="col-12 col-s-12 col-m-2 col-l-2 col-xl-1" mobileMenuExpended={mobileMenuExpended} />
                </div>
            </div>
            <div className="row">
                <Content colClasses="col-11 col-s-11 col-m-10 col-l-10 col-xl-11">
                    {children}
                </Content>
            </div>
        </>
    );
};
export default Layout;