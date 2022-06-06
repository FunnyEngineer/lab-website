import { Box } from "@mui/system";
import React from "react";
import dev from '../figs/dev.jpeg'

function DevProfile() {
    return (<Box className="People-content"
    component="img"
    sx={{
      height: 500,
      width: 400,
      filter: dev,
      pl:10, pt:20
    }}
    alt="The house from the offer."
    src={dev}
  />)
}

export default DevProfile;