import { DashWrapper } from './style';
import { IonIcon } from '@ionic/react';
import { logOutOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';

const Dashboard = () => {
	const history = useHistory();

	const logOut = () => {
		history.push('/');
	};

	return (
		<DashWrapper>
			<div className="log-wrap">
				<div onClick={logOut}>
					<IonIcon icon={logOutOutline}></IonIcon>
				</div>
			</div>
			<div className="welcome">
				<p>Hola 🐱</p>
				<p>Gerson!</p>
			</div>
			<div className="dash-wrap">
				<div className="pets">
					<p className="number">10</p>
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
