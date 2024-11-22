import { Button, buttonType } from '../components/Button';
import { Input } from '../components/Input';
import { Wrapper } from '../global/Container';

export default function Login() {
	return (
		<Wrapper className="flex justify-center items-center w-full h-screen ">
			<section className='border border-borderColor p-5'>
				<p className="text-center my-3">Login</p>
				<Input type="text" placeholder="Enter email" label="Email" className="my-3" />
				<Input type="password" placeholder="*****" label="Password" className="my-3" />
				<Button buttonType={buttonType.button} value="Login" className="w-full my-3" />
			</section>
		</Wrapper>
	);
}
