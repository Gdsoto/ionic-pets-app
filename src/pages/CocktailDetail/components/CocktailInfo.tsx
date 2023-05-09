import React from 'react';

import {
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
} from '@ionic/react';
import { DrinkData } from '../../../interfaces/models';

interface Props {
	cocktail: DrinkData;
}

const CocktailInfo: React.FC<Props> = ({ cocktail }: Props) => {
	return (
		<IonCard>
			<IonCardHeader>
				<IonCardTitle>
					<h1>{cocktail?.name}</h1>
				</IonCardTitle>
				<img alt="cocktail-img" src={cocktail?.img} width={200} />
				<IonCardSubtitle>
					<h2># {cocktail?.id}</h2>
				</IonCardSubtitle>
				<IonCardSubtitle>
					<h2>Category</h2>
				</IonCardSubtitle>
				<IonCardSubtitle>{cocktail.category}</IonCardSubtitle>
				<IonCardSubtitle>
					<h2>Glass</h2>
				</IonCardSubtitle>
				<IonCardSubtitle>{cocktail.glass}</IonCardSubtitle>
				<IonCardSubtitle>
					<h2>Instructions</h2>
				</IonCardSubtitle>
				<IonCardSubtitle>{cocktail.instructions}</IonCardSubtitle>
				<IonCardSubtitle>
					<h2>Measure</h2>
				</IonCardSubtitle>
				<IonCardSubtitle>{cocktail.measure}</IonCardSubtitle>
			</IonCardHeader>
		</IonCard>
	);
};

export default CocktailInfo;
