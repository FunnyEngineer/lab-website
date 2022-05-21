import React from "react";
import logo from './logo.svg';
import { Button, Card, Grid, IconButton, Link, Paper, Toolbar, Typography } from '@mui/material';
import { Add, Search, Title } from '@mui/icons-material';
import NavigationTab from "../components/NavigationTab";
import campus from '../figs/campus.jpg';
import { Box } from "@mui/system";

function Home() {
    const style = {
        paperContainer: {campus},
      };
    return (
        <>
        <NavigationTab/>
        <Paper
        sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${campus})`,
            }}
        >
            {<img style={{ display: 'relative' }} src={campus} alt={"campus"} />}
            <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" >
              {"Extreme Weather & Urban Sustainability LAB"}
            </Typography>
          </Box>
        </Grid>
      </Grid>

        </Paper>
        <img />
        </>
    );
  }
  
  export default Home;
  