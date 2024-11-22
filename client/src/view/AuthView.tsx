import { Link } from 'react-router-dom';
import { Form } from '../components/Form';
import { Wrapper } from '../global/Container';

export default function AuthView() {
	return (
		<Wrapper>
			<Form>
				<Link to={'/login'}>Login</Link>
				<Link to={'/register'}>Register</Link>
			</Form>
		</Wrapper>
	);
}
