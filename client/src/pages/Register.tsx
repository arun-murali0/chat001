import { Button, buttonType } from '../components/Button';
import { Input } from '../components/Input';
import { Wrapper } from '../global/Container';
import useFormHook from '../hooks/useForm';
import { RegisterValidationSchema, registerType } from '../utils/validation/RegisterSchema';
import { Link } from 'react-router-dom';

export default function Login() {
	const { control, handleSubmit } = useFormHook<registerType>(RegisterValidationSchema);

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<Wrapper className="flex justify-center items-center w-full h-screen ">
			<form className="border border-borderColor p-5" onSubmit={handleSubmit(onSubmit)}>
				<p className="text-center my-3">Register</p>
				<Input
					type="text"
					placeholder="Enter username"
					label="Username"
					name="username"
					className="my-3"
					control={control}
				/>
				<Input
					type="text"
					placeholder="Enter email"
					name="email"
					label="Email"
					control={control}
					className="my-3"
				/>
				<Input
					type="password"
					placeholder="*****"
					label="Password"
					name="password"
					className="my-3"
					control={control}
				/>
				<Button buttonType={buttonType.submit} value="Register" className="w-full my-3" />
				<Link to="/" className="text-linkColor">
					Back
				</Link>
			</form>
		</Wrapper>
	);
}
