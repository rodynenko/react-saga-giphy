import styled from 'styled-components';

export const Button = styled.button<{ isDisabled: boolean }>`
	display: inline-block;
	padding: 10px 15px;
	color: #333;
	border: 1px solid #333;
	background-color: transparent;
	-webkit-appearance: none;
	cursor: pointer;
	transition: color .2s ease-in-out, background-color .2s ease-in-out;
	opacity: ${props => props.isDisabled ? 0.6 : 1};
	pointer-events: ${props => props.isDisabled ? 'none' : undefined}

	&:hover {
		color: #fff;
		background-color: #333;
	}
`;
