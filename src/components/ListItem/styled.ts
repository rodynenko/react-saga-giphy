import styled from 'styled-components';

export const ListItemWrap = styled.div<{ image: string }>`
	display: block;
	width: 100%;
	height: 0;
	padding-bottom: 56.25%;
	background-color: #fafafa;
	background-position: center;
	background-size: cover;
	background-image: url(${props => props.image});
`
