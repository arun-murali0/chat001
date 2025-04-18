import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { Wrapper } from '../global/Container';

export default function AuthView() {
	return (
		<Wrapper>
			<div className="absolute top-0 z-[1] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
				<div className="flex flex-col h-screen justify-center items-center flex-wrap">
					<p className="leading-tight max-w-3xl text-5xl my-3 text-wrap">
						Welcome to <span className="text-buttonSecondary">Chat Room</span> Connect with Others
						in <span className="text-buttonSecondary">Real Time</span>
					</p>
					<p className="max-w-3xl text-wrap my-3 text-sm leading-relaxed">
						{`At Chat Room, communication is at the heart of everything we do. From lively discussions
						to casual chats, you'll find a room for every interest. Join now to start your journey
						of real-time connections and endless conversations`}
					</p>
					<div className="flex gap-2 my-3">
						<Link to={'/login'}>
							<Button value="Start Chatting" />
						</Link>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}
