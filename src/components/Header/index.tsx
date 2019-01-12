import React from 'react';
import { HeaderWrap } from './styled';

export interface Header {
	title: string;
}

const Header: React.SFC<Header> = ({ title }) => {
	return (
		<HeaderWrap>
			<h1>{title}</h1>
		</HeaderWrap>
	);
}

export default Header;
