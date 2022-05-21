import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, IconButton, Link, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import People from './pages/People';
import { BrowserRouter as Router, Routes, 
  Route} from "react-router-dom";
import Home from './pages/Home';
import Testtheme from './theme';

function App() {
  const sections = [
    {title: "HOME", url: '/'},
    {title: "PEOPLE", url: 'people/'},
    {title: "RESEARCH", url: 'research/'},
    {title: "PUBLICATIONS", url: 'publications/'},
    {title: "GITHUB", url: 'github/'},
    {title: "NEWS", url: 'news/'},
    {title: "CONTACT", url: 'contact/'},

  ];
  return (
    <ThemeProvider theme={Testtheme}>
      <>
    <Router>
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path= "/people" element={<People/>}/>
      </Routes>
    </Router>
    </>
    </ThemeProvider>
  );
}

export default App;
