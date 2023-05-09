import styled from 'styled-components';
import { PINK_500 } from '../../utils/constants';



// ANIMATION LINK: https://codepen.io/gamjachip/pen/GQPEvP
export const LoaderWrapper = styled.section`
	* {
		padding: 0;
		margin: 0;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
		position: relative;
	}

	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
	background-color: ${PINK_500};

	.ball {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		margin-top: 4rem;
		z-index: 0;
	}
	.ball:after {
		content: '';
		position: absolute;
		display: block;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		border-radius: 50%;
		box-shadow: inset 0 -8px 0 0 rgba(0, 0, 0, 0.2);
		background: #6e64f0;
		z-index: 1;
	}
	.ball:focus {
		outline: none;
	}
	.ball:focus:after {
		animation: bounce 400ms infinite alternate;
	}
	@keyframes bounce {
		from {
			transform: scale(2);
			animation-timing-function: ease-in;
		}
		to {
			transform: scale(0.8);
			animation-timing-function: cubic-bezier(0, 0, 0, 1);
		}
	}
	@keyframes bounce-shadow {
		from {
			transform: scale(2.5, 2.6) translateY(-50%);
			animation-timing-function: ease-in;
		}
		to {
			transform: scale(0.5) translateY(0);
			-webkit-animation-timing-function: cubic-bezier(0, 0, 0, 1);
			animation-timing-function: cubic-bezier(0, 0, 0, 1);
		}
	}
	.ball:focus:before {
		content: '';
		position: absolute;
		display: block;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.05);
		animation: bounce-shadow 400ms infinite alternate;
		z-index: -10;
	}

	.dog {
		width: 100px;
		height: 100px;
		z-index: 1;
	}
	.dog:before {
		content: '';
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.03);
		transform: translateY(-30%) scale(1.5);
	}
	.dog * {
		position: absolute;
	}

	.dog-body {
		top: -50%;
		animation: dog-body 200ms ease-in-out infinite alternate;
	}
	.dog-body:before {
		content: '';
		position: absolute;
		bottom: 90%;
		right: 50%;
		width: 90%;
		height: 90%;
		border-top-left-radius: 100%;
		border-bottom-left-radius: 10%;
		border-top-right-radius: 10%;
		background: rgba(255, 255, 255, 0.4);
		transform-origin: right bottom;
		animation: dog-tail-blur 200ms 33.3333333333ms ease-in-out infinite
			alternate both;
	}
	@keyframes dog-tail-blur {
		from {
			transform: rotate(0);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		to {
			transform: rotate(90deg);
			opacity: 0;
		}
	}
	@keyframes dog-body {
		from {
			transform: translateX(-10%);
		}
		to {
			transform: translateX(10%);
		}
	}
	.dog-head {
		animation: dog-head 1800ms cubic-bezier(0.11, 0.79, 0, 0.99) infinite;
	}
	@keyframes dog-head {
		from,
		to {
			transform: rotate(45deg);
		}
		33.3% {
			transform: rotate(-45deg);
		}
		66.6% {
			transform: rotate(0);
		}
	}
	.dog-torso {
		top: -20%;
		animation: dog-torso 200ms ease-in-out infinite alternate-reverse;
	}
	@keyframes dog-torso {
		from {
			transform: translateX(-5%);
		}
		to {
			transform: translateX(5%);
		}
	}
	.dog-eyes {
		width: 60%;
		top: 55%;
		left: 20%;
		z-index: 1;
	}
	.dog-eyes:before {
		content: '';
		display: block;
		height: 40px;
		width: 40px;
		border-radius: 40px;
		position: absolute;
		background: orange;
		top: -10px;
		left: -10px;
		z-index: 0;
		border: 4px solid white;
		border-left-width: 0;
		border-bottom-width: 0;
		border-top-width: 0;
		transform: rotate(-45deg);
	}

	.dog-eye {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #000;
		z-index: 1;
		animation: dog-eye 1800ms infinite;
	}
	@keyframes dog-eye {
		from,
		to {
			animation-timing-function: step-end;
			opacity: 1;
		}
		50%,
		55% {
			animation-timing-function: step-start;
			opacity: 0;
		}
	}
	.dog-eye:first-child {
		left: 0;
	}
	.dog-eye:last-child {
		right: 0;
	}

	.dog-muzzle {
		width: 60%;
		left: 20%;
		height: 50%;
		border-bottom-left-radius: 100%;
		border-bottom-right-radius: 100%;
		background: white;
		bottom: -15%;
	}
	.dog-muzzle:before,
	.dog-muzzle:after {
		content: '';
		display: block;
		position: absolute;
	}
	.dog-muzzle:before {
		width: 6px;
		height: 20px;
		bottom: 0;
		left: calc(50% - 3px);
		background: #eaebec;
	}
	.dog-muzzle:after {
		background: black;
		width: 20px;
		height: 15px;
		bottom: 12px;
		left: calc(50% - 10px);
		border-bottom-left-radius: 60% 60%;
		border-bottom-right-radius: 60% 60%;
		border-top-left-radius: 50% 40%;
		border-top-right-radius: 50% 40%;
	}

	.dog-tongue {
		width: 40px;
		height: 100%;
		left: calc(50% - 20px);
		z-index: -1;
		transform-origin: center top;
		animation: dog-tongue 1800ms -50ms ease-in-out infinite;
	}
	@keyframes dog-tongue {
		from,
		to {
			transform: rotate(0);
		}
		16.6666666667% {
			transform: rotate(30deg);
		}
		33.3333333333%,
		66.6666666667% {
			transform: rotate(0);
		}
		50%,
		83.3333333333% {
			transform: rotate(-20deg);
		}
	}
	.dog-tongue:before {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 40px;
		background: #fd3163;
		animation: dog-tongue-inner 100ms ease-in-out infinite alternate;
	}
	@keyframes dog-tongue-inner {
		from {
			transform: translateY(5%);
		}
		to {
			transform: translateY(22%);
		}
	}
	.dog-ears {
		width: 40%;
		top: 25%;
		left: 30%;
		animation: dog-ears 1800ms 100ms ease infinite;
	}
	@keyframes dog-ears {
		42.3%,
		71.6% {
			transform: rotate(-5deg);
		}
		50.3%,
		79.6% {
			transform: rotate(5deg);
		}
		5% {
			transform: rotate(5deg);
		}
		12% {
			transform: rotate(-5%);
		}
		from,
		33.3%,
		66%,
		to {
			transform: rotate(0);
		}
	}
	.dog-ear {
		bottom: -10px;
		height: 50px;
		width: 50px;
		background: #eaebec;
		animation-duration: 400ms;
		animation-direction: alternate;
		animation-timing-function: ease-in-out;
		animation-fill-mode: both;
		animation-iteration-count: infinite;
	}
	.dog-ear:first-child {
		border-bottom-left-radius: 80%;
		border-top-right-radius: 80%;
		right: 100%;
		box-shadow: inset -15px 15px 0 1px white;
		transform-origin: right bottom;
		transform: rotate(10deg);
	}
	.dog-ear:last-child {
		border-top-left-radius: 80%;
		border-bottom-right-radius: 80%;
		left: 100%;
		box-shadow: inset 15px 15px 0 0 white;
		transform-origin: left bottom;
		transform: rotate(-10deg);
	}

	.dog-tail {
		width: 22px;
		height: 24.2px;
		background: white;
		bottom: 40%;
		border-radius: 11px;
		left: calc(50% - 11px);
		transform-origin: center bottom;
	}
	.dog-tail .dog-tail {
		animation: dog-tail-segment 200ms ease-in-out infinite alternate;
	}
	@keyframes dog-tail-segment {
		from {
			transform: rotate(-10deg);
		}
		to {
			transform: rotate(10deg);
		}
	}
	.dog-body > .dog-tail {
		bottom: 90%;
		animation: dog-tail 200ms ease-in-out infinite alternate;
	}
	@keyframes dog-tail {
		from {
			transform: rotate(-45deg);
		}
		to {
			transform: rotate(45deg);
		}
	}
	.dog-body,
	.dog-torso,
	.dog-head {
		border-radius: 50%;
		background: white;
		position: absolute;
		height: 100%;
		width: 100%;
	}

	.dog-body,
	.dog-torso {
		box-shadow: inset 0 -15px 0 0 #eaebec;
	}

	body {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	html,
	body {
		background: #ffe16e;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}
`;
