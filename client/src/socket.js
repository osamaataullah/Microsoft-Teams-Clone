import io from 'socket.io-client';
const sockets = io('http://localhost:3000');
//const socket = io('/', { autoConnect: true });
export default sockets;