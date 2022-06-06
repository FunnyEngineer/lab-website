import { Card, Checkbox, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BottomBar from "../components/BottomBar";
import NavigationTab from "../components/NavigationTab";
import { LinkedInEmbed } from 'react-social-media-embed';
import campus4 from '../figs/campus4.jpg';
import samuel from '../figs/Samuel.jpg';
import sui from '../figs/sui.jpg';
import yajie from '../figs/yajie.jpg';
import tingyu from '../figs/ting-yu.jpg';
import dev from '../figs/dev.jpeg'
import ProfileCard from "../components/ProfileCard";
import { Box } from "@mui/system";

function People() {
  return (
    <>
      <NavigationTab />
      <Paper className="People-cover"
        
      >
        {<img style={{ display: 'none' }} src={campus4} alt={"campus"} />}
         <Box className="People-content"
        component="img"
        sx={{
          height: 500,
          width: 400,
          filter: dev,
          pl:10, pt:20
        }}
        alt="The house from the offer."
        src={dev}
      />
      </Paper>
      <Typography component="h1" variant="h3" color="primary" align="center" sx={{my: 10}}>
        Ph.D Students
      </Typography>
      <Grid container spacing={2} 
        justifyContent="space-between" alignItems="center" 
        textAlign='center'
      >
        <Grid item xs={2} />
        <Grid item xs={4}>
          <ProfileCard name="Yajie Lee" img={yajie} title='PostDoc Fellow' email='yajie.li@austin.utexas.edu'/>
        </Grid>
        <Grid item xs={4} >
          <ProfileCard name="Kwun Yip Fung" img={samuel} title='Ph.D Student' email='samuel.fung@utexas.edu'/>
        </Grid>
        <Grid item xs={2} />

        <Grid item xs={2} />
        <Grid item xs={4}>
          <ProfileCard name="Xinxin Sui" img={sui} title='Ph.D Student' email='suixinxin@utexas.edu'/>
        </Grid>
        <Grid item xs={4}>
        <ProfileCard name="Ting-Yu Dai" img={tingyu} title='Ph.D Student' email='funnyengineer@utexas.edu'/>
        </Grid>
        <Grid item xs={2} />
         </Grid>
      <BottomBar />
    </>
  );
};

export default People;