import React, { useState } from "react";
import { AppBar, Button, IconButton, Link, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import { Search } from '@mui/icons-material';
import '../App.css';


function NavigationTab() {
  const trigger = useScrollTrigger();
    const sections = [
        {title: "HOME", url: '/'},
        {title: "PEOPLE", url: '/people/'},
        {title: "RESEARCH", url: '/research/'},
        {title: "PUBLICATIONS", url: '/publications/'},
        {title: "GITHUB", url: '/github/'},
        {title: "NEWS", url: '/news/'},
        {title: "CONTACT", url: '/contact/'},
    
      ];

      return (
        <React.Fragment >
           <AppBar color='inherit' position='fixed' style={{ background: trigger ? undefined : 'transparent', boxShadow: 'none', transition: trigger ? "0.3s" : "0.5s",}}>
            <Toolbar sx = {{}}>
              <Typography component="h1" variant="h4"
              color = {trigger ? "secondary" : 'white'} align="left" noWrap sx={{flex:1}}>
                {"Extreme Weather & Urban Sustainability LAB"}
              </Typography>

              {sections.map((section) => (
                <Button
                  key={section.title}
                  variant="text"
                  href={section.url}
                  sx={{ p: 1, flexShrink: 0 }}
                  color = {trigger ? "primary" : 'success'}
                >
                  {section.title}
                </Button>
              ))}
            </Toolbar>
           </AppBar>
        </React.Fragment>
      );
};

export default NavigationTab;