import { IonPage } from '@ionic/react';
import Container from '../../components/shared/Container';
import { RouteComponentProps } from 'react-router';
import { useEffect, useState } from 'react';
import cocktailApi from '../../services/api';
import { DrinkData, DrinkDetail } from '../../interfaces/models';
import CocktailInfo from './components/CocktailInfo';
import Ingredients from './components/Ingredients';

interface PokemonProps
	extends RouteComponentProps<{
		id: string;
	}> {}

const CocktailDetail: React.FC<PokemonProps> = ({ match }) => {
	const Id = match.params.id;

	const DEFAULT_VALUES = {
		id: Id,
		name: '',
		img: '',
		type: '',
		category: '',
		glass: '',
		ingredients: [],
		instructions: '',
		measure: '',
	};

	const [cocktail, setCocktail] = useState<DrinkData>(DEFAULT_VALUES);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getCocktail = async () => {
			setLoading(true);
			const { data } = await cocktailApi.get(`/lookup.php?i=${Id}`);
			const details: DrinkDetail = data.drinks[0];

			const pokemonData: DrinkData = {
				id: Id,
				name: details.strDrink,
				img: details.strDrinkThumb,
				type: details.strAlcoholic,
				category: details.strCategory,
				glass: details.strGlass,
				ingredients: [
					details.strIngredient1,
					details.strIngredient2,
					details.strIngredient3,
					details.strIngredient4,
				],
				instructions: details.strInstructions,
				measure: details.strMeasure1,
			};

			setCocktail(pokemonData);
			setLoading(false);
		};

		getCocktail();

		return () => {
			setCocktail(DEFAULT_VALUES);
		};
	}, [Id]);

	return (
		<IonPage>
			<Container>
				<>
					{!loading && (
						<>
							<CocktailInfo cocktail={cocktail} />
							<Ingredients cocktail={cocktail} />
						</>
					)}
				</>
			</Container>
		</IonPage>
	);
};

export default CocktailDetail;
