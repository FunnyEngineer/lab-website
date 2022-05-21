import React from "react";
import { AppBar, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';

function NavigationTab() {
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
        <div className="App">
         <React.Fragment>
           <AppBar color = 'inherit' position='static' >
            <Toolbar sx = {{borderBottom: 1, borderColor: 'divider'}}>
              <Typography component="h1" variant="h4"
              color = "secondary" align="left" noWrap sx={{flex:1}}>
                {"Extreme Weather & Urban Sustainability LAB"}
              </Typography>

              {sections.map((section) => (
                <Button
                  key={section.title}
                  variant="text"
                  href={section.url}
                  sx={{ p: 1, flexShrink: 0 }}
                >
                  {section.title}
                </Button>
              ))}
            </Toolbar>
           </AppBar>
         </React.Fragment>
        </div>
      );
};

export default NavigationTab;