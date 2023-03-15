import React from "react";

import { styled, Box } from "@mui/material";

const MainWrapperHeader = styled(Box)(() => ({

    width: "100vw",
    height: "15vh",
    backgroundColor: "red",
    color: "white",
    fontSize: "50px",
    padding: "20px",
    textAlign: "center",
}));

export default function Header() {
    return (
        <MainWrapperHeader>
          <h3>HEADER</h3>  
        </MainWrapperHeader>
    )
}