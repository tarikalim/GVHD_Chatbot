import React from "react";
import { Button, Box, Typography, IconButton } from "@mui/material";
import { Home as HomeIcon, Instagram as InstagramIcon, PlayArrow as PlayArrowIcon } from "@mui/icons-material";

const StartChatScreen = ({ onStartChat }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bgcolor="#f5f5f5"
        >
            <Box position="absolute" top={16} left={16} display="flex" gap={2}>
                <IconButton
                    href="https://www.mef.edu.tr/en"
                    target="_blank"
                    sx={startStyles.iconColor}
                >
                    <HomeIcon />
                </IconButton>
                <IconButton
                    href="https://www.instagram.com/mefuniversitesi/"
                    target="_blank"
                    sx={startStyles.iconColor}
                >
                    <InstagramIcon />
                </IconButton>
            </Box>
            <Typography variant="h4" fontWeight="bold" mb={4}>
                GVHD Patient Information Bot
            </Typography>
            <PlayArrowIcon sx={startStyles.playIcon} />
            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={onStartChat}
                sx={startStyles.buttonColor}
            >
                Ask you question about Graft Versus Host Disease.
            </Button>
        </Box>
    );
};

const startStyles = {
  buttonColor: {
      backgroundColor: "#1f3162",
  },
  iconColor: {
        color: "#ee434d",
    },
    playIcon: { fontSize: 64, mb: 4, color: "#ee434d" },

}

export default StartChatScreen;
