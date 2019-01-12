import styled from 'styled-components';
import { media } from '../../styles/helpers';

export const ListUl = styled.ul`
	margin: 0 -15px;
	padding: 0;
	list-style: none;
`;

export const ListContainer = styled.div`
	margin-top: 20px;
	padding: 0 15px;
`;

export const ListLi = styled.li`
	display: block;
	padding: 0 15px;
	margin-bottom: 10px;

	${media.desktop`width: 25%;`}
	${media.tablet`width: 50%;`}
	${media.desktop`width: 50%;`}
`;
