import { Paper, Typography } from "@mui/material";
import React from "react";
import BottomBar from "../components/BottomBar";
import NavigationTab from "../components/NavigationTab";
import campus4 from '../figs/campus4.jpg';
import { LinkedInEmbed } from 'react-social-media-embed';
import { Box } from "@mui/system";

export function News() {
    return (
        <React.Fragment>
            <NavigationTab />
            <Paper className="People-cover">
            {<img style={{ display: 'none' }} src={campus4} alt={"campus"} />}
                <Typography variant="h2" color='white' sx={{pt: 20, pl: 20, fontStyle: 'italic' }}>You are new, so let's get the news.</Typography>
                <Box display="flex" component="span" sx={{pt: 5, pl: 20, alignItems: 'center', justifyContent: 'center'}}>
                <LinkedInEmbed  
                    height={490}          
                    width={1200}
                    url ="https://www.linkedin.com/embed/feed/update/urn:li:share:6944011403930345472" 
                    postUrl="https://www.linkedin.com/posts/texus_urbanclimate-uhi-urbanhealth-activity-6944011405373173760-8nOk?utm_source=linkedin_share&utm_medium=member_desktop_web"
                    
                />
                </Box>
            </Paper>
            <BottomBar/>
        </React.Fragment>
    )
}