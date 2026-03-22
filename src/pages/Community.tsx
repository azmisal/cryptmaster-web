import React from 'react';
import { Container, Box, Typography, Paper, Grid } from '@mui/material';
import Navbar from '@/components/Navbar';
import { Chat } from '@mui/icons-material';
import ChatSection from '@/components/ChatSection';

const Community: React.FC = () => {
    return (
        <Box sx={{
            minHeight: '100vh'
        }}>
            <Navbar />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <ChatSection />

            </Container>
        </Box>
    );
};

export default Community;
