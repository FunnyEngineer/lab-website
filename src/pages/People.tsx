import { Card, Checkbox, Paper } from "@mui/material";
import React from "react";
import BottomBar from "../components/BottomBar";
import NavigationTab from "../components/NavigationTab";
import { LinkedInEmbed  } from 'react-social-media-embed';
import campus4 from '../figs/campus4.jpg';

function People() {
    return (
        <>
        <NavigationTab/>
        <Paper
        sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: 'grey.800',
            mb: 4,
            backgroundSize: "cover",
            filter: 'blur(5px)',
            height: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${campus4})`,
            }}
        >
            {/* <div style={{ display: 'flex', justifyContent: 'center'}}>
            <LinkedInEmbed 
              url="https://www.linkedin.com/embed/feed/update/urn:li:share:6932070569332858882"
              width={525}
              height={570} 
            />
          </div> */}
        </Paper>
        
        <BottomBar/>
        </>
    );  
};

export default People;