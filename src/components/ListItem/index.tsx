import React, { Component } from 'react';
import observer, { ObserverType } from '../../utils/observer';
import { GIPHYImageType } from '../../types';
import { ListItemWrap } from './styled';

interface ListItemState {
	image: string;
	isHighResLoad: boolean;
}
class ListItem extends Component<GIPHYImageType, ListItemState> {
	private node: HTMLDivElement | null;
	private observerInstance: ObserverType | null;
	constructor(props: GIPHYImageType) {
		super(props);

		this.state = {
			image: props.images['480w_still'].url,
			isHighResLoad: false
		};
		this.node = null;
		this.observerInstance = null;
	}

	componentDidMount() {
		if (!this.node) return;

		this.observerInstance = observer(this.node, {
			trigger: ():void => {
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

		this.observerInstance.observe();
	}

	componentWillUnmount() {
		if (this.observerInstance) {
			this.observerInstance.unobserve();
		}
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
