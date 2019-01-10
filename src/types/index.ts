import { Action, Reducer } from 'redux';

interface GIPHYPropType {
	url: string;
	mp4?: string;
}

export interface GIPHYImagesType {
	downsized_small: GIPHYPropType;
	original: GIPHYPropType;
}

export interface GIPHYImageType {
	id: string;
	slug: string;
	title: string;
	images: GIPHYImagesType;
}

export interface ActionType extends Action {
	type: string;
	payload?: object;
	error?: boolean;
};

export type ActionHandlersType<S> = {
	[key: string]: Reducer<S>
};
