import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import NotFound from './pages/NotFound.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import ChatRoom from './view/ChatRoom.tsx';

// Router
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '/chatroom',
		element: <ChatRoom />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

// main
createRoot(document.getElementById('root')!).render(
	<section className="h-screen w-screen overflow-x-hidden bg-backgroundInput text-primaryText antialiased">
		<RouterProvider router={router} />
	</section>
);
