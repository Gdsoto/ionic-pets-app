// Libs
import { useEffect, useState } from 'react';
import { IonCol, IonGrid, IonPage, IonRow } from '@ionic/react';

// Components
import Container from '../../components/shared/Container';

// Styles
import './Home.css';
import cocktailApi from '../../services/api';
import { Drink, DrinksListResponse } from '../../interfaces/models';
import Card from '../../components/Card/Card';

const Home: React.FC = () => {
	const [cocktails, setCocktails] = useState<Drink[]>([]);

	useEffect(() => {
		const getCocktails = async () => {
			const { data } = await cocktailApi.get<DrinksListResponse>(
				'/filter.php?c=Cocktail'
			);
			const cocktailsList: Drink[] = data.drinks.map((cocktail) => cocktail);
			setCocktails(cocktailsList);
		};

		getCocktails();
	}, []);

	return (
		<IonPage>
			<Container>
				<IonGrid fixed={true}>
					<IonRow>
						{cocktails ? (
							<IonCol>
								{cocktails.map((cocktail) => (
									<Card cocktail={cocktail} key={cocktail.idDrink} />
								))}
							</IonCol>
						) : (
							<p>Cargando</p>
						)}
					</IonRow>
				</IonGrid>
			</Container>
		</IonPage>
	);
};

export default Home;
