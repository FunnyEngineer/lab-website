import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BottomBar from "../components/BottomBar";
import NavigationTab from "../components/NavigationTab";
import { PaperCard } from "../components/PaperCard";
import campus4 from '../figs/campus4.jpg';

export function Research() {
    return (
        <React.Fragment>
            <NavigationTab />
            <Paper className="People-cover">
            {<img style={{ display: 'none' }} src={campus4} alt={"campus"} />}
                <Typography variant="h2" color='white' sx={{pt: 20, pl: 20, fontStyle: 'italic' }}>Research is what I’m doing when I don’t know what I’m doing.
– Wernher von Braun</Typography>
                <Typography variant="h6" color='white'sx={{pt: 5, pl: 20, maxWidth: 1000, whiteSpace: "pre-line"}}>{`Research in the Intelligent Environments Laboratory focuses on approaches that allow for resilience and adaptation in the operational phase of buildings. We integrate

Data analytics, machine learning and artificial intelligence
Occupant comfort and behavior
Architectural design and control systems
Renewable energy systems and environmental monitoring
and innovate at the intersection of these areas.

We are reinventing the built environment such that it adapts to the occupants and varying internal and external influences.`}</Typography>
            </Paper>

            <Grid direction="column" alignItems='center' sx={{pt:5, pl:20}}>
                <Grid item>
                <Typography variant="h4" color='primary' >2022 Paper:</Typography>
                </Grid>
                <PaperCard 
                    nameList="Xinyue Ye, Dev Niyogi" 
                    title="Resilience of human settlements to climate change needs the convergence of urban planning and urban climate science"
                    publicationName="Computational Urban Science" 
                    time = "2022/12" />
                <PaperCard 
                    nameList="Shuzhe Huang, Xiang Zhang, Nengcheng Chen, Hongliang Ma, Jiangyuan Zeng, Peng Fu, Won-Ho Nam, Dev Niyogi" 
                    title="Generating high-accuracy and cloud-free surface soil moisture at 1 km resolution by point-surface data fusion over the Southwestern US"
                    publicationName="Agricultural and Forest Meteorology" 
                    time = "2022/06" />
                 <PaperCard 
                    nameList="Gerald Mills, Iain D Stewart, Dev Niyogi" 
                    title="The origins of modern urban climate science: reflections on ‘A numerical model of the urban heat island’"
                    publicationName="Progress in Physical Geography: Earth and Environment" 
                    time = "2022/06" />
                <PaperCard 
                    nameList="Davide Cammarano, Sajad Jamshidi, Gerrit Hoogenboom, Alex C Ruane, Dev Niyogi, Domenico Ronga" 
                    title="Processing tomato production is expected to decrease by 2050 due to the projected increase in temperature"
                    publicationName="Nature Food" 
                    time = "2022/06" />
                <PaperCard 
                    nameList="Ashok Mishra, Sourav Mukherjee, Bruno Merz, Vijay P Singh, Daniel B Wright, Gabriele Villarini, Subir Paul, D Nagesh Kumar, C Prakash Khedun, Dev Niyogi, Guy Schumann, Jery R Stedinger" 
                    title="An overview of flood concepts, challenges, and future directions"
                    publicationName="Journal of hydrologic engineering" 
                    time = "2022/06" />
                    
            </Grid>
            <BottomBar />
        </React.Fragment>
    )
}