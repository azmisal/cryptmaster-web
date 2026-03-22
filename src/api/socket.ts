import {io,Socket} from 'socket.io-client';

let socket: Socket | null = null;

//connect to socket server  
export const connectSocket = (token: string) => {
    if (!socket) {
        socket = io(import.meta.env.VITE_SOCKET_URL, {
            autoConnect: false, 
            auth: { token },
        });

        socket.on('connect', () => {
            console.log('🟢 Connected to Socket.IO server');
        });

        socket.on('disconnect', () => {
            console.log('🔴 Disconnected from Socket.IO server');
        });
    }

    if (!socket.connected) {
        socket.connect();
    }

    return socket; 
};

//get the socket instance
export const getSocket = (): Socket | null => {
    return socket;
}

//disconnect from socket server
export const disconnectSocket = () => {
    if (socket) {
        socket.disconnect();
        socket = null;
    }
}   

