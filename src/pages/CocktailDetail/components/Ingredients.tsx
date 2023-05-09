import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonItem,
	IonLabel,
	IonList,
} from '@ionic/react';
import { DrinkData } from '../../../interfaces/models';

interface Props {
	cocktail: DrinkData;
}

const Ingredients: React.FC<Props> = ({ cocktail }) => {
	return (
		<IonCard>
			<IonCardHeader>
				<IonCardTitle>Ingredients</IonCardTitle>
				<IonCardSubtitle>Specific Ingredients to agree</IonCardSubtitle>
			</IonCardHeader>
			<IonCardContent>
				<IonList>
					{cocktail.ingredients.map((ingredient) => (
						<IonItem>
							<IonLabel> - {ingredient}</IonLabel>
						</IonItem>
					))}
				</IonList>
			</IonCardContent>
		</IonCard>
	);
};

export default Ingredients;
