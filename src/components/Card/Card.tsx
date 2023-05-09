import {
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
} from '@ionic/react';

// Interfaces
import { Drink } from '../../interfaces/models';

// Styles
import './Card.css';
import { useHistory } from 'react-router';

interface Props {
	cocktail: Drink;
}

const Card: React.FC<Props> = ({ cocktail }) => {
	const history = useHistory();

	const onClick = () => {
		history.push(`/cocktail/${cocktail.idDrink}`);
	};

	return (
		<IonCard onClick={onClick}>
			<img alt={cocktail.strDrink} src={cocktail.strDrinkThumb} />
			<IonCardHeader>
				<IonCardTitle>{cocktail.strDrink}</IonCardTitle>
				<IonCardSubtitle># {cocktail.idDrink}</IonCardSubtitle>
			</IonCardHeader>
		</IonCard>
	);
};

export default Card;
