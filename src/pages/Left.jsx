import React from "react";

import { styled, Box } from "@mui/material";

const MainWrapperLeft = styled(Box)(() => ({

    width: "20vw",
    minWidth: "300px",
    height: "auto",
    backgroundColor: "green",
    color: "white",
    fontSize: "50px",
    padding: "20px",
    textAlign: "center",
}));

export default function Left() {
    return (
        <MainWrapperLeft>
           <h3>LEFT</h3> 
        </MainWrapperLeft>
    )
}