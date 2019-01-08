import { Action, Reducer } from 'redux';

export interface GIPHYListType {

}

export interface ActionType extends Action {
	type: string;
	payload?: object;
	error?: boolean;
};

export type ActionHandlersType<S> = {
	[key: string]: Reducer<S>
};
