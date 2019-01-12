import React, { Component } from 'react';
import { GIPHYImageType } from '../../types';
import { ListItemWrap } from './styled';

interface ListItemState {
	image: string;
	isHighResLoad: boolean;
}
class ListItem extends Component<GIPHYImageType, ListItemState> {
	constructor(props: GIPHYImageType) {
		super(props);

		this.state = {
			image: props.images.downsized_small.url,
			isHighResLoad: false
		};
	}

	componentDidMount() {
		const img = new Image();
		const newSrc = this.props.images.original.url;

		img.onload = () => {
			this.setState({
				isHighResLoad: true,
				image: newSrc
			})
		};
		img.src = newSrc;
	}

	render() {
		const { image } = this.state;

		return (
			<ListItemWrap image={image} />
		);
	}
}

export default ListItem;
