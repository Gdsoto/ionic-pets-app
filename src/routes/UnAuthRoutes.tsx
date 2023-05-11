import { Redirect, Route } from 'react-router';

// Pages
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PageLayout from '../components/Layout/PageLayout';

const UnAuthRoutes = () => {
	return (
		<>
			<Redirect exact path="/" to="/login" />
			<Route
				path="/login"
				render={() => (
					<PageLayout>
						<Login />
					</PageLayout>
				)}
				exact={true}
			/>
			<Route
				path="/register"
				render={() => (
					<PageLayout>
						<Register />
					</PageLayout>
				)}
				exact={true}
			/>
		</>
	);
};

export default UnAuthRoutes;
