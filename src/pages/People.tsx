import { Card, CardActionArea, CardContent, CardMedia, Checkbox, Grid, Paper, Stack, Typography } from "@mui/material";
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
        <Grid container direction="row" alignItems="center">
          <Grid item>
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
          </Grid>
          <Grid item justifyContent='center'>
            <Grid direction="column" alignItems='center'>
            <Grid item>
              <Typography variant="h2" color='white' sx={{mt:4}}>Prof. Dev Niyogi</Typography>
              </Grid>
              <Grid item>
                  <Typography display="block" variant="body1" color='white' sx={{mt:3, maxWidth: 1000, whiteSpace: "pre-line"}}>
              {`Lab director for the The University of Texas Extreme weather and Urban Sustainability (TExUS ) Lab 

              2020 - onwards, John E. "Brick" Elliott Centennial Endowed Professor, Department of Geological Sciences, Jackson School of Geosciences, and Department of Civil, Architectural and Environmental Engineering, Cockrell School of Engineering, The University of Texas at Austin.

              2021- onwards, Affiliate Faculty, Oden Institute for Computational Engineering and Sciences, The University of Texas at Austin
              2020 - onwards , Affiliate Faculty, Center for Space Research, The University of Texas at Austin

              2020 - onwards, Professor Emeritus, Purdue University, West Lafayette, Indiana

              2020, Dave P. Carlton Centennial Professor, Department of Geological Sciences, Jackson School of Geosciences, and Department of Civil, Architectural and Environmental Engineering, Cockrell School of Engineering, The University of Texas at Austin.


              2014 - 2020, Professor, Purdue University, Department of Agronomy, and Department of Earth, Atmospheric and Planetary Sciences

              2005 - 2018 State Climatologist for Indiana, Purdue University

              2017 - 2020, Affiliated Faculty, Division of Environmental and Ecological Engineering, and Interdisciplinary Program in Environmental Science and Engineering, Purdue University.

              `}
              </Typography>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
          
        
        
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

        <Grid item xs={2} />
        <Grid item xs={4}>
          <ProfileCard name="Harsh Kamath" img={null} title='Ph.D Student' email='harsh.kamath@utexas.edu'/>
        </Grid>
        <Grid item xs={4}>
        <ProfileCard name="Mahmoud Mbarak" img={null} title='Ph.D Student' email='Mbarak@utexas.edu'/>
        </Grid>
        <Grid item xs={2} />
         </Grid>
        
      <BottomBar />
    </>
  );
};

export default People;