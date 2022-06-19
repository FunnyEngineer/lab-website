import { Grid, Typography } from "@mui/material";
import React from "react";

interface paperCardProps {
    nameList: string,
    title: string,
    publicationName: string,
    time: string,
}

export function PaperCard(props: paperCardProps) {
    return (
        <React.Fragment>
            <Grid item sx={{p:2}}>
                <Typography sx={{ display: 'inline', fontWeight: 'bold'}} color='secondary'>{props.nameList}, </Typography>

                <Typography sx={{ display: 'inline', textDecoration: 'underline', fontWeight: 'bold'}} color='primary'>"{props.title}"</Typography>

                <Typography sx={{ display: 'inline', fontWeight: 'bold'}} color='secondary'>, {props.publicationName}</Typography>
                <Typography sx={{ display: 'inline' }} >, {props.time}</Typography>
            </Grid>
        </React.Fragment>
    )
}