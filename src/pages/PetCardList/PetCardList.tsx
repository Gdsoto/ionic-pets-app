import { Main, Title } from '../../components/shared/Main/Main';
import BackButton from '../../components/shared/BackButton/BackButton';
import { useEffect, useState } from 'react';
import { ListWrapper } from './style';
import PetCard from '../../components/PetCard/PetCard';
import { FormWrap } from '../../components/shared/Form/Form';
import { Loader } from '../../components/shared/Loader/Loader';
import { IonIcon } from '@ionic/react';
import { earthOutline } from 'ionicons/icons';
import PetsApi from '../../services/api';

const PetCardList = () => {
	const [pets, setPets] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getPetsComponent = () => {
		if (pets.length > 0) {
			return (
				<>
					{pets.map((pet) => (
						<PetCard key={pet.id} pet={pet} />
					))}
				</>
			);
		}

		return (
			<FormWrap>
				<div className="not-found">
					<IonIcon icon={earthOutline}></IonIcon>
					<p>No se encontraron mascotas.</p>
				</div>
			</FormWrap>
		);
	};

	useEffect(() => {
		const getPets = async () => {
			try {
				setIsLoading(true);
				const { data } = await PetsApi.get('/pet/get-all');
				setPets(data);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};

		getPets();
	}, []);

	return (
		<Main>
			<BackButton />
			<Title>Mascotas 🐶</Title>
			<ListWrapper>
				{isLoading ? (
					<FormWrap>
						<div className="loader-wrap">
							<Loader />
						</div>
					</FormWrap>
				) : (
					getPetsComponent()
				)}
			</ListWrapper>
		</Main>
	);
};

export default PetCardList;
