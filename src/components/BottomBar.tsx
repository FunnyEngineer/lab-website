import { Divider, Grid, Link, ListItem, Paper, Toolbar, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

function BottomBar() {
    const colleges =  ( 
       <Grid container direction="column"
       justifyContent="center"
       alignItems="start">
            <Typography variant="h6" color={grey[300]}>Colleges</Typography>
            <Link href="https://cockrell.utexas.edu/">Cockrell School of Engineering</Link>
            <Link href="https://www.jsg.utexas.edu/">Jackson School of Geosciences</Link>
            <Link href="https://soa.utexas.edu/">School of Architecture</Link>
        </Grid>);

    const departments =  ( 
    <Grid container direction="column"
    justifyContent="center"
    alignItems="start">
         <Typography variant="h6" color={grey[300]}>Departments</Typography>
         <Link href="https://www.caee.utexas.edu/">Department of Civil Engineering</Link>
         <Link href="https://www.jsg.utexas.edu/education/graduate/">Department of Geosciences</Link>
     </Grid>);

    const others =  ( 
    <Grid container direction="column"
    justifyContent="center"
    alignItems="start">
         <Typography variant="h6" color={grey[300]}>Others</Typography>
         <Link href="https://www.tacc.utexas.edu/">Texas Advanced Computing Center</Link>
         <Link href="https://www.austintexas.gov/">City of Austin</Link>
     </Grid>);

     const bottom = (
         <Grid container direction="row"
         justifyContent="space-between"
         alignItems="center"
         spacing={2}>
        <Grid container direction="row"
            justifyContent="space-evenly"
            alignItems="start" xs= {8}>
             
         <Link href="https://emergency.utexas.edu/">Emergency Information</Link>
         <Divider orientation="vertical" flexItem />
         <Link href="https://www.utexas.edu/site-policies">Site Policies</Link>
         <Divider orientation="vertical" flexItem />
         <Link href="https://cio.utexas.edu/policies/web-accessibility">Web Accessibility Policies</Link>
         <Divider orientation="vertical" flexItem />
         <Link href="https://cio.utexas.edu/policies/web-privacy">Web Privacy Policy</Link>
         

         </Grid>
         <Grid container direction="row"
            justifyContent="space-around"
            alignItems="start"  xs= {4}>
         <Typography>© The University of Texas at Austin 2021</Typography>
         </Grid>
         </Grid>
         
     );

    return (
        <div className="App">
        <Paper sx= {{backgroundColor: grey[500], px:15}}>
           <Toolbar sx = {{borderBottom: 1, borderColor: 'divider', px:10}}>
             <Typography component="h1" variant="h4"
             color ={grey[300]}  align="left" noWrap sx={{flex:1}}>
               {"LABORATORY PARTNERS"}
             </Typography>
           </Toolbar>
           <Grid container spacing={2} sx={{px:10, pb:5, pt:3}}>
            <Grid item xs={4}>
                {colleges}
            </Grid>
            <Grid item xs={4}>
                {departments}
            </Grid>
            <Grid item xs={4}>
                {others}
            </Grid>
            </Grid>
            <Divider  />
            {bottom}
        </Paper>
       </div>
    );
}

export default BottomBar