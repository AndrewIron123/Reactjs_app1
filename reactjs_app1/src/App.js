import logo from './logo.svg';
import './App.scss';
import Content from './content/Content';
import Footer from './footer/Footer';
import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './layout/Layout';
import HomePage from './HomePage/HomePage';
import React from 'react';


function App() {
  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route index element={<HomePage />} />
              {/* <Route path="make-an-appointment" element={<CalendarPage />} />
              <Route path="favourite" element={<FavouritePage />} />
              <Route path="*" element={<ErrorPage />} /> */}
            </Route>
          </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
