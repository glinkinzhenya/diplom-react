import React, { useEffect, useState } from "react";
import axios from "axios";

import { styled, Box } from "@mui/material";
import UserItem from "./UserItem";

const MainWrapperList = styled(Box)(() => ({
    marginTop: "20px",
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
}));

export default function UsersList() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get("https://63f0c7635b7cf4107e26a8c8.mockapi.io/react");
            setUsers(data);
        })();
    }, []);

    const startQuiz = () => {
        console.log("Quiz started");
        alert("Quiz started")
    }

    return (

        <MainWrapperList>
            {users.map((user, index) => (
                <UserItem
                    key={index}
                    user={user}
                    id={index}
                    ButtonStartQuiz={startQuiz}
                />
            ))}
        </MainWrapperList>
    )
}