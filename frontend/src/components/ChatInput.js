import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const ChatInput = ({ onSendMessage }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== "") {
            onSendMessage(input);
            setInput("");
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            alignItems="center"
            p={2}
            borderTop="1px solid #ddd"
            bgcolor="#ffffff"
        >
            <TextField
                variant="outlined"
                placeholder="Type your message..."
                fullWidth
                value={input}
                onChange={(e) => setInput(e.target.value)}
                sx={chatStyles.textField}
            />
            <Button
                variant="contained"

                type="submit"
                sx={chatStyles.sendButton}
            >
                Send
            </Button>
        </Box>
    );
};

const chatStyles = {
    textField: {marginRight: "16px", borderRadius: "10px"},
    sendButton: {backgroundColor: "#1f3162", borderRadius: "10px"},

}

export default ChatInput;
