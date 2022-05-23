import React from "react";
import logo from './logo.svg';
import { Button, Card, Grid, IconButton, Link, List, Paper, Toolbar, Typography } from '@mui/material';
import { Add, Search, Title } from '@mui/icons-material';
import NavigationTab from "../components/NavigationTab";
import campus from '../figs/campus.jpg';
import { Box } from "@mui/system";
import BottomBar from "../components/BottomBar";

function Home() {
    return (
        <>
        <NavigationTab/>
        <Paper
        sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 4,
            backgroundSize: "cover",
            height: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${campus})`,
            }}
        >
            {<img style={{ display: 'none' }} src={campus} alt={"campus"} />}
            <Typography component="h1" variant="h3" color="inherit" align="right"
            sx={{pr:5, pt:20}}>
              {"Extreme Weather & Urban Sustainability "}
            </Typography>
            <Typography component="h1" variant="h3" color="inherit" align="right" 
            sx={{pr:5}}>
            {"Laboratory"}
            </Typography>

        </Paper>
        <Typography variant="h4" color="primary" align="left"
        sx={{pt:10, pl:40}}>Recent News</Typography>
        <List sx={{pt:5, pl:40}}>
        <Typography variant="h6" display="inline" sx={{pr:5}}>2022.05.20</Typography>
        <Typography variant="h6" display="inline">Title 1</Typography>
        <Typography >Content 1</Typography>
        </List>
        <BottomBar/>
        </>
    );
  }
  
  export default Home;
  