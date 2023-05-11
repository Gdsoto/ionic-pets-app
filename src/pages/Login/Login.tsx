import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { INITIAL_VALUES, loginValidations } from './util';
import {
	Button,
	LinkButton,
	OutlineButton,
} from '../../components/shared/Button/Button';
import Input from '../../components/shared/FormComponents/Input/Input';
import { Form, FormLabel, FormWrap } from '../../components/shared/Form/Form';
import { Main, Title } from '../../components/shared/Main/Main';
import { useHistory } from 'react-router';
import BackButton from '../../components/shared/BackButton/BackButton';

const Login = () => {
	const history = useHistory();

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		defaultValues: INITIAL_VALUES,
		resolver: yupResolver(loginValidations),
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	const goToRegister = () => {
		history.push('/register');
	};

	return (
		<Main>
			<BackButton />
			<Title>Iniciar sesión</Title>
			<FormWrap>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<FormLabel>Correo Electronico</FormLabel>
					<Input
						id="email"
						type="text"
						label="Email"
						errors={errors}
						nameValue="email"
						control={control}
					/>
					<FormLabel>Contraseña</FormLabel>
					<Input
						id="pass"
						type="password"
						label="Contraseña"
						errors={errors}
						nameValue="password"
						control={control}
					/>
					<Button type="submit">Iniciar Sesión</Button>
					<OutlineButton onClick={goToRegister}>
						¿No tienes cuenta? Registrate
					</OutlineButton>
					<LinkButton>¿Olvidaste la contraseña?</LinkButton>
				</Form>
			</FormWrap>
		</Main>
	);
};

export default Login;
