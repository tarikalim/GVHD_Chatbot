import React, {useState} from "react";
import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import StartChatScreen from "./components/StartChatScreen";
import {AppBar, Toolbar, Typography, Box} from "@mui/material";

const App = () => {
    const [messages, setMessages] = useState([]);
    const [isChatStarted, setIsChatStarted] = useState(false);

    const handleStartChat = () => {
        setIsChatStarted(true);
    };

    const handleSendMessage = async (message) => {
        const userMessage = {sender: "user", text: message};
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        try {
            const response = await fetch("http://localhost:5000/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({request: message}),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            let responseText = data.response.split("Local Search Response:")[1]?.trim() || "No relevant data found.";
            responseText = responseText.replace(/\[Data:.*?\]/g, "").replace(/\[.*?m/g, "").trim();
            const botMessage = {sender: "bot", text: responseText};
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error("Error sending message:", error);
            const errorMessage = {sender: "bot", text: "An error occurred."};
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        }
    };


    if (!isChatStarted) {
        return <StartChatScreen onStartChat={handleStartChat}/>;
    }

    return (
        <Box display="flex" flexDirection="column" height="100vh">
            <AppBar position="static" sx={appStyles.appBar}>
                <Toolbar>
                    <Typography variant="h6" sx={appStyles.appHeader}>
                         GVHD Patient Information Bot
                    </Typography>
                </Toolbar>
            </AppBar>
            <ChatMessages messages={messages}/>
            <ChatInput onSendMessage={handleSendMessage}/>
        </Box>
    );
};
const appStyles = {
    appHeader: {
        flexGrow: 1,
    },
    appBar: {
        background: "linear-gradient(to bottom, #1f3162 80%, #f1f1f0)",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",


    },
    iconColor: {
        color: "#ee434d",
    },

}
export default App;
