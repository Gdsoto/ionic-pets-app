import { Redirect, Route } from 'react-router';

// Pages
import PetCardList from '../pages/PetCardList/PetCardList';
import Dashboard from '../pages/Dashboard/Dashboard';
import BottomNav from '../components/BottomNav/BottomNav';
import PageLayout from '../components/Layout/PageLayout';
import PetDetail from '../pages/PetDetail/PetDetail';

const AuthRoutes = (role) => {
	const adminRoutes = () => {
		return (
			<>
				<Redirect exact path="/" to="/dash" />
				<Route
					path="/dash"
					render={() => (
						<PageLayout>
							<Dashboard />
							<BottomNav role={role} />
						</PageLayout>
					)}
					exact={true}
				/>
				<Route
					path="/admin-pets"
					render={() => (
						<PageLayout>
							<PetCardList />
							<BottomNav role={role}/>
						</PageLayout>
					)}
					exact={true}
				/>
				<Route path="/pet/:id" component={PetDetail} exact={true} />
			</>
		);
	};

	const userRoutes = () => {
		return (
			<>
				<Redirect exact path="/" to="/dash" />
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
				<Route path="/pet/:id" component={PetDetail} exact={true} />
			</>
		);
	};

	return role === 'USER' ? userRoutes() : adminRoutes();
};

export default AuthRoutes;
