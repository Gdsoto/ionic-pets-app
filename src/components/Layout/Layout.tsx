import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';

import Home from '../../pages/Home/Home';
import CocktailDetail from '../../pages/CocktailDetail/CocktailDetail';

const Layout = () => {
	return (
		<IonReactRouter>
			<IonRouterOutlet>
				<Redirect exact path="/" to="/home" />
				<Route path="/home" render={() => <Home />} exact={true} />
				<Route path="/cocktail/:id" component={CocktailDetail} exact={true} />
			</IonRouterOutlet>
		</IonReactRouter>
	);
};

export default Layout;
