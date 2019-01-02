import React from 'react';
import ListItem, { ListItemType } from '../ListItem';

interface ListType {
	items?: Array<ListItemType>
	loading?: boolean;
}

const List: React.SFC<ListType> = (props) => {
	return (
		<div />
	);
}

export default List;
