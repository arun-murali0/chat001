import { Server } from 'socket.io';

export const webSocketSetup = () => {
	const websocketConnection = new Server();

  // connection Establish
	websocketConnection.on('connection', (socket) => {
		console.log('user is connected');
	});
};
