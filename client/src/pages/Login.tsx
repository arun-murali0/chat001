import { Link } from 'react-router-dom';
import { Button, buttonType } from '../components/Button';
import { Input } from '../components/Input';
import { Wrapper } from '../global/Container';
import useFormHook from '../hooks/useForm';
import { loginSchemaType, LoginValidationSchema } from '../utils/validation/LoginSchema';

export default function Login() {
	const { control, handleSubmit } = useFormHook<loginSchemaType>(LoginValidationSchema);

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<Wrapper className="flex justify-center items-center w-full h-screen ">
			<form onSubmit={handleSubmit(onSubmit)} className="border border-borderColor p-5">
				<p className="text-center my-3">Chat Room - Login</p>

				<Input
					type="email"
					placeholder="Enter your email"
					name="email"
					label="Email"
					className="my-3"
					control={control}
				/>
				<Input
					type="password"
					placeholder="*****"
					name="password"
					label="Password"
					className="my-3"
					control={control}
				/>
				<Button buttonType={buttonType.submit} value="Login" className="w-full my-3" />
				<div className="flex justify-between mt-2">
					<Link to="/" className="text-linkColor">
						back
					</Link>
					<div>
						New user ?{' '}
						<Link to={'/register'}>
							<span className="text-linkColor">Register</span>
						</Link>
					</div>
				</div>
			</form>
		</Wrapper>
	);
}
