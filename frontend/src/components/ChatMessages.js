import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const ChatMessages = ({ messages }) => {
    return (
        <Box
            flex={1}
            p={2}
            bgcolor="#f9f9f9"
            overflow="auto"
            display="flex"
            flexDirection="column"
            gap={2}
        >
            {messages.map((msg, index) => (
                <Paper
                    key={index}
                    elevation={3}
                    sx={{
                        p: 2,
                        maxWidth: "70%",
                        alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                        bgcolor: msg.sender === "user" ? "#f1f1f0" : "#4b5a81",
                        color: msg.sender === "user" ? "black" : "white",
                        borderRadius: "10px",
                        borderTopRightRadius: msg.sender === "user" ? "0" : "10px",
                        borderTopLeftRadius: msg.sender === "bot" ? "0" : "10px",
                    }}
                >
                    <Typography>{msg.text}</Typography>
                </Paper>
            ))}
        </Box>
    );
};



export default ChatMessages;
