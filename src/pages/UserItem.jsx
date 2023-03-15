import React, { useState } from "react";

import { Card, CardActions, CardContent, CardMedia, Button, Typography, styled, Box } from "@mui/material";
import "./UserItem.css"
// export default function UserItem(props) {
// делаем деструктуризацию

export default function UserItem({ user, id, ButtonStartQuiz }) {

    let [showModal, setshowModal] = useState(false);

    const handleShowModel = () => {
        setshowModal(!showModal)
        console.log("ok");
    };

    return (
        <Card className="card" sx={{ width: 300 }}>
            <CardMedia
                sx={{
                    height: 140,
                    width: 150
                }}
                image={user.avatar}
                title={user.firstName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {user.firstName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {user.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={ButtonStartQuiz}>Start quiz</Button>
                <Button size="small" onClick={handleShowModel}>Show More</Button>
            </CardActions>

            {showModal
                && <div style={{
                    width: "280",
                    height: "auto",
                    backgroundColor: "grey",
                    color: "white",
                    fontSize: "20px",
                    padding: "10px",
                    margin: "10px"
                }}>
                    <div style={{
                    }}> {user.description}</div>
                </div>
            }
        </Card>
    )
}
