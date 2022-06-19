import { Avatar, Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface profileCardProps {
    img: string | null,
    name: string,
    title: string,
    email: string,
}

function ProfileCard(props: profileCardProps) {
    return (
        <React.Fragment>
            <Card elevation={0}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pl: 1, pb: 1 }}>
                <Avatar alt={props.name} src={(props.img) ? props.img : undefined} sx={{ width: '200px', height: '200px' }}/>
                <Typography gutterBottom variant="h5" component="div" color='primary' sx={{pt: 3, pb:2}}>
                {props.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div" color='secondary' sx={{px: 3}}>
                {props.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div" color='secondary' sx={{pb: 3}}>
                {props.email}
                </Typography>
            </Box>
            </Card>
        </React.Fragment>
    )
};

export default ProfileCard;