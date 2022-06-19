import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, IconButton, Link, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import People from './pages/People';
import { BrowserRouter as Router, Routes, Route, HashRouter} from "react-router-dom";
import Home from './pages/Home';
import Testtheme from './theme';
import { Research } from './pages/Research';
import { News } from './pages/News';

function App() {
  return (
    <ThemeProvider theme={Testtheme}>
      <>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path= "/people" element={<People/>}/>
        <Route path= "/research" element={<Research/>}/>
        <Route path= "/news" element={<News/>}/>
      </Routes>
    </Router>
    </>
    </ThemeProvider>
  );
}

export default App;
