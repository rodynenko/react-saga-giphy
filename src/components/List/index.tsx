import React from 'react';
import { connect } from 'react-redux';
import { ReduxStateType } from '../../reducers';
import { GIPHYImageType } from '../../types';
import ListItem from '../ListItem';
import Loader from '../Loader';
import { ListUl, ListContainer, ListLi } from './styled';

interface ListType {
	items: GIPHYImageType[] | null;
	loading?: boolean;
}

const List: React.SFC<ListType> = (props) => {
	const { loading, items } = props;

	if (loading) return <Loader />;
	if (!items) return null;

	return (
		<ListContainer>
			<ListUl>
				{Array.isArray(items) && items.map((item) => (
					<ListLi key={item.id}>
						<ListItem {...item} />
					</ListLi>
				))}
			</ListUl>
		</ListContainer>

	);
}

export default connect((state: ReduxStateType) => ({
	loading: state.search.isFetching,
	items: state.search.results[state.search.currentSearch]
}))(List);
