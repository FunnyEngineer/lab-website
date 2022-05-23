import { Card, Checkbox } from "@mui/material";
import React from "react";
import BottomBar from "../components/BottomBar";
import NavigationTab from "../components/NavigationTab";
import { LinkedInEmbed  } from 'react-social-media-embed';

function People() {
    return (
        <>
        <NavigationTab/>
        <Card>
            People
        </Card>
        <Checkbox defaultChecked/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
  <LinkedInEmbed 
    url="https://www.linkedin.com/embed/feed/update/urn:li:share:6932070569332858882"
    width={525}
    height={570} 
  />
</div>
        <BottomBar/>
        </>
    );  
};

export default People