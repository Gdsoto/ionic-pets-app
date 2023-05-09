import { Redirect, Route } from 'react-router';

// Pages
import Login from '../pages/Login/Login';

const UnAuthRoutes = () => {
	return (
		<>
			<Redirect exact path="/" to="/login" />
			<Route path="/login" render={() => <Login />} exact={true} />
		</>
	);
};

export default UnAuthRoutes;
