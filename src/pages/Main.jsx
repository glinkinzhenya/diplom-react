import React from "react";

import { styled, Box } from "@mui/material";
import UsersList from "./UsersList";

const MainWrapperMain = styled(Box)(() => ({

    width: "80vw",
    maxHeight: "70vh",
    backgroundColor: "grey",
    color: "white",
    fontSize: "30px",
    padding: "20px",
    textAlign: "center",
    overflowY: "scroll",
}));

export default function Main() {
    return (
        <MainWrapperMain>
            <h1 className="title">Choose your QUIZ</h1>
            <UsersList />
        </MainWrapperMain>
    )
}