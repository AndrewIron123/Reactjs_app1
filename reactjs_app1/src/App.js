import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './layout/Layout';
import HomePage from './HomePage/HomePage';
import React from 'react';
import CalendarPage from './CalendarPage/CalendarPage';
import Article from './article/Article';
import ErrorPage from './ErrorPage/ErrorPage';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/article/:articleId" element={<Article />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
