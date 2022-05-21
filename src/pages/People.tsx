import { Card, Checkbox } from "@mui/material";
import React from "react";
import NavigationTab from "../components/NavigationTab";

function People() {
    return (
        <>
        <NavigationTab/>
        <Card>
            People
        </Card>
        <Checkbox defaultChecked/>
        </>
    );  
};

export default People