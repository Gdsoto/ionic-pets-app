import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { INITIAL_VALUES, RegisterValidations } from './util';
import { Button } from '../../components/shared/Button/Button';
import Input from '../../components/shared/FormComponents/Input/Input';
import { Form, FormLabel, FormWrap } from '../../components/shared/Form/Form';
import { Main, Title } from '../../components/shared/Main/Main';
import BackButton from '../../components/shared/BackButton/BackButton';

const Register = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		defaultValues: INITIAL_VALUES,
		resolver: yupResolver(RegisterValidations),
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<Main>
			<BackButton arrow />
			<Title>Registrarse</Title>
			<FormWrap>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<FormLabel>Nombre</FormLabel>
					<Input
						id="name"
						type="text"
						label="Nombre"
						errors={errors}
						nameValue="name"
						control={control}
					/>
					<FormLabel>Apellido</FormLabel>
					<Input
						id="last_name"
						type="text"
						label="Apellido"
						errors={errors}
						nameValue="last_name"
						control={control}
					/>
					<FormLabel>Celular</FormLabel>
					<Input
						id="phone"
						type="text"
						label="Celular"
						errors={errors}
						nameValue="phone"
						control={control}
					/>
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
					<FormLabel>Confirmar contraseña</FormLabel>
					<Input
						id="confirm_pass"
						type="password"
						label="Contraseña"
						errors={errors}
						nameValue="confirm_password"
						control={control}
					/>
					<Button type="submit">Registrarse</Button>
				</Form>
			</FormWrap>
		</Main>
	);
};

export default Register;
