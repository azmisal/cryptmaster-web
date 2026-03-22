import { getAllMessages } from '@/api/Messages';
import Navbar from '@/components/Navbar';
import { Message } from '@/interfaces/Messages';
import { Box, OutlinedInput, InputLabel, InputAdornment, IconButton, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { Send } from 'lucide-react';
import { useUser } from '@/contexts/UserContext';
import { getSocket, connectSocket, disconnectSocket } from "@/api/socket"
import { tokenStore } from '@/stores/tokenstore';
import { useToast } from "@/hooks/use-toast"; // keep if you want

import React, { useEffect, useRef } from "react";


const ChatSection: React.FC = () => {
    const { user } = useUser();
    const currentUsername = user?.username;
    const messagesContainerRef = useRef<HTMLDivElement | null>(null);
    const [messages, setMessages] = React.useState<Message[] | null>([]);
    const [newMessage, setNewMessage] = React.useState<string>('');
    const { toast } = useToast();


    //get all messages on component mount
    useEffect(() => {
        const fetchMessages = async () => {
            const response = await getAllMessages();
            setMessages(response);
            console.log("Fetching messages...");
        }
        fetchMessages();
    }, []);

    //for text send scrolling to bottom
    useEffect(() => {
        if (!messagesContainerRef.current) return;
        messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }, [messages]);

    useEffect(() => {
        const initSocketConnection = async () => {
            console.log("Initializing current user:", currentUsername);
            const token = tokenStore().getToken();
            console.log("Connecting to socket with token:", token);

            if (!token) {
                toast({
                    title: "Transaction Failed",
                    description:
                        "No token found. Please log in again.",
                    variant: "destructive",
                });
                console.log("No token found. Cannot connect to community.");
                return;
            }

            const socket = connectSocket(token); // ⚠️ no need await

            if (!socket) {
                toast({
                    title: "Transaction Failed",
                    description:
                        "Failed to connect to community. Please try again later.",
                    variant: "destructive",
                });
                console.log("❌ Failed to connect to community");
                return;
            }

            socket.on('receive_message', (data) => {
                console.log("📩 Message received:", data);

                setMessages((prev) => (prev ? [...prev, data] : [data]));
            });
        };

        initSocketConnection();

        return () => {
            const socket = getSocket();
            if (socket) {
                socket.off('receive_message'); // cleanup
            }
            disconnectSocket();
        };
    }, []);


    const handlesend = () => {
        if (!newMessage.trim()) return;

        const socket = getSocket();
        if (!socket) return;

        socket.emit('send_message', {
            message: newMessage.trim(),
        });

        setNewMessage('');
    };

    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Navbar />
            <Box sx={{ p: 4, pt: 8 }}>
                {/* <h1>Community Chat</h1> */}
                <Box sx={{ mt: 2, width: '100%', borderRadius: 2, p: 2, minHeight: '80vh' }}>
                    <Box ref={messagesContainerRef} sx={{ minHeight: '70vh', bgcolor: 'background.paper', borderRadius: 2, p: 2, overflowY: 'auto', maxHeight: '70vh' }}>
                        {messages && messages.length > 0 ? (
                            (() => {
                                let lastDate = '';
                                return messages.flatMap((msg) => {
                                    const msgDate = new Date(msg.timestamp).toLocaleDateString('en-GB');
                                    const isOwn = msg.username === currentUsername;
                                    const sections: React.ReactNode[] = [];

                                    if (msgDate !== lastDate) {
                                        lastDate = msgDate;
                                        sections.push(
                                            <Box key={`date-${msgDate}`} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, py: 1.2 }}>
                                                <Box sx={{ flex: 1, borderBottom: '1px solid', borderColor: 'divider' }} />
                                                <Typography variant="caption" sx={{ color: 'text.disabled', fontWeight: 600 }}>
                                                    {msgDate}
                                                </Typography>
                                                <Box sx={{ flex: 1, borderBottom: '1px solid', borderColor: 'divider' }} />
                                            </Box>,
                                        );
                                    }

                                    sections.push(
                                        <Box
                                            key={msg.id}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: isOwn ? 'flex-end' : 'flex-start',
                                                mb: 1.5,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    maxWidth: '75%',
                                                    bgcolor: isOwn ? 'primary.main' : 'background.default',
                                                    color: isOwn ? 'primary.contrastText' : 'text.primary',
                                                    borderRadius: isOwn ? '16px 16px 6px 16px' : '16px 16px 16px 6px',
                                                    p: 1.2,
                                                    boxShadow: 1,
                                                }}
                                            >
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                                    <Typography variant="caption" sx={{ fontWeight: 700, mr: 1 }}>
                                                        {msg.username}
                                                    </Typography>
                                                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.7rem' }}>
                                                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                                                    {msg.message}
                                                </Typography>
                                            </Box>
                                        </Box>,
                                    );

                                    return sections;
                                });
                            })()
                        ) : (
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', py: 8, color: 'text.secondary' }}>
                                <Box sx={{ width: 56, height: 56, borderRadius: '50%', bgcolor: 'grey.100', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: 1 }}>
                                    <Typography variant="h5" sx={{ fontWeight: 700 }}>💬</Typography>
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>No messages yet</Typography>
                                <Typography variant="body2" sx={{ textAlign: 'center', maxWidth: 280 }}>
                                    Start the conversation by typing a message below. Your chat bubbles will appear here in real-time.
                                </Typography>
                            </Box>
                        )}
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <FormControl sx={{ minWidth: { xs: '95%', sm: '70%', md: '60%' } }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Type Something</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type='text'
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: 2 }}
                                endAdornment={
                                    <InputAdornment position="end" >
                                        <IconButton
                                            onClick={handlesend}
                                            edge="end"
                                            sx={{ marginRight: '8' }}
                                        >
                                            <Send />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </Box>
                </Box>
            </Box>
        </Box>
    );


}
export default ChatSection;
