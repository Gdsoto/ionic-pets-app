import { DashWrapper } from './style';
import { IonIcon } from '@ionic/react';
import { logOutOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { changeLogState } from '../../context/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../context/store';
import { useEffect, useState } from 'react';
import PetsApi from '../../services/api';

const Dashboard = () => {
	const loginData = useSelector((state: RootState) => state.login);
	const dispatch = useDispatch();
	const history = useHistory();
	const [pets, setPets] = useState(0);

	const logOut = () => {
		dispatch(changeLogState(false));
		history.push('/login');
	};

	useEffect(() => {
		const getPets = async () => {
			try {
				const { data } = await PetsApi.get('/pet/get-all');
				setPets(data.length);
			} catch (error) {
				console.log(error);
			}
		};

		getPets();
	}, []);

	return (
		<DashWrapper>
			<div className="log-wrap">
				<div onClick={logOut}>
					<IonIcon icon={logOutOutline}></IonIcon>
				</div>
			</div>
			<div className="welcome">
				<p>Hola 🐱</p>
				<p>{loginData.firtsName}!</p>
			</div>
			<div className="dash-wrap">
				<div className="pets">
					<p className="number">{pets}</p>
					<p className="text">mascotas</p>
				</div>
				<div className="request">
					<p className="number">1</p>
					<p className="text">solicitud</p>
				</div>
				<div className="adopt">
					<p className="number">0</p>
					<p className="text">adopciones</p>
				</div>
			</div>
		</DashWrapper>
	);
};

export default Dashboard;
