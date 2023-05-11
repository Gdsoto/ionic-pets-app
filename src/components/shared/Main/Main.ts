import { styled } from 'styled-components';
import { GRAY_500, PINK_300 } from '../../../utils/constants';

export const Main = styled.section`
	@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
	font-family: 'Rubik', sans-serif;
	font-size: 16px;
	box-sizing: border-box;
	width: 100%;
	padding: 16px;
	min-height: 100vh;
	background-color: ${PINK_300};

	p {
		margin: 0;
		padding: 0;
	}
`;

export const Title = styled.h2`
	@import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@600&display=swap');
	font-family: 'Albert Sans', sans-serif;
	font-weight: bold;
	color: ${GRAY_500};
	padding: 16px 0;
	font-size: 3rem;
	margin-bottom: 16px;
`;
