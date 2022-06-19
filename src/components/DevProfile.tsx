import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import dev from '../figs/dev.jpeg'

function DevProfile() {
  return (
  <React.Fragment>
    <Box className="People-content"
    component="img"
    sx={{
      height: 500,
      width: 400,
      filter: dev,
      pl:10, pt:20
    }}
    alt="Dev Niyogi"
    src={dev}
    />
    <Typography variant="h1" color='inherit'>Dev Niyogi</Typography>
  </React.Fragment>)
}

export default DevProfile;