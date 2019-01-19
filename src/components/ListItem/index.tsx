import React, { Component } from 'react';
import lozad from 'lozad';
import { GIPHYImageType } from '../../types';
import { ListItemWrap } from './styled';

interface ListItemState {
	image: string;
	isHighResLoad: boolean;
}
class ListItem extends Component<GIPHYImageType, ListItemState> {
	private node: HTMLDivElement | null;
	private observer: lozad.Observer | null;
	constructor(props: GIPHYImageType) {
		super(props);

		this.state = {
			image: props.images['480w_still'].url,
			isHighResLoad: false
		};
		this.node = null;
		this.observer = null;
	}

	componentDidMount() {
		if (!this.node) return;

		this.observer = lozad(this.node, {
			load: (): void => {
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
		});
		this.observer.observe();
	}

	render() {
		const { image } = this.state;

		return (
			<ListItemWrap
				image={image}
				ref={(node) => { this.node = node; }}
			/>
		);
	}
}

export default ListItem;
