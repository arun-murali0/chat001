import { Server } from 'socket.io';
import { info } from 'winston';

export const webSocketSetup = (server: any) => {
	const userMapSet = new Map();

	const websocketConnection = new Server(server, {
		cors: {
			credentials: true,
		},
	});

	const disconnect = (socket: any) => {
		info('connection disconnected');
		for (const [userId, _socketId] of userMapSet.entries()) {
			if (userId === socket.id) {
				userMapSet.delete(userId);
				break;
			}
		}
	};

	// connection Establish
	websocketConnection.on('connection', (socket) => {
		info('user is connected');
		const userId = socket.handshake.query?.userId;
		if (userId) {
			userMapSet.set(userId, socket.id);
			info('connection is established', userId, socket.id);
		} else {
			info('userId is not provided');
		}

		// disconnect
		websocketConnection.on('disconnect', () => disconnect(socket));
	});
};
