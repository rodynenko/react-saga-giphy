import styled, { keyframes } from 'styled-components';

const spin = keyframes`
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
	margin: 0 auto;
	border: 6px solid #f3f3f3;
	border-top: 6px solid #333;
	border-radius: 50%;
	width: 35px;
	height: 35px;
	animation: ${spin} 1.5s linear infinite;
`;

export default Loader;
