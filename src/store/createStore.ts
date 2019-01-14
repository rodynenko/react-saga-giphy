import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSagas from '../sagas';

declare const window: Window & {
	__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?(a: any): any;
	__REDUX_DEVTOOLS_EXTENSION__?(a?: any): any;
};

const isDev = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composeWithMiddlewares = () => {
	if (isDev && window.__REDUX_DEVTOOLS_EXTENSION__) {
		return compose(
			applyMiddleware(...middlewares),
			window.__REDUX_DEVTOOLS_EXTENSION__()
		);
	}

	return compose(applyMiddleware(...middlewares));
}

const store = createStore(rootReducer, composeWithMiddlewares());

sagaMiddleware.run(rootSagas);

export default store;
