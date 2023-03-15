import React from "react";

import { styled, Box } from "@mui/material";

const MainWrapperFooter = styled(Box)(() => ({

    width: "100vw",
    height: "15vh",
    backgroundColor: "blue",
    color: "white",
    fontSize: "50px",
    padding: "20px",
    textAlign: "center",
}));

export default function Header() {
    return (
        <MainWrapperFooter>
           <h3>FOOTER</h3> 
        </MainWrapperFooter>
    )
}