import { Redirect, Route } from 'react-router';

// Pages
import PetCardList from '../pages/PetCardList/PetCardList';
import Dashboard from '../pages/Dashboard/Dashboard';
import BottomNav from '../components/BottomNav/BottomNav';
import PageLayout from '../components/Layout/PageLayout';

const AuthRoutes = () => {
	return (
		<>
			<Redirect path="/" to="/dash" />
			<Route
				path="/dash"
				render={() => (
					<PageLayout>
						<Dashboard />
						<BottomNav />
					</PageLayout>
				)}
				exact={true}
			/>
			<Route
				path="/pets"
				render={() => (
					<PageLayout>
						<PetCardList />
						<BottomNav />
					</PageLayout>
				)}
				exact={true}
			/>
		</>
	);
};

export default AuthRoutes;
