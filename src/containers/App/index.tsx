import React from 'react';
import { Provider } from 'react-redux';
import SearchForm from '../../components/SearchForm';
import Header from '../../components/Header';
import List from '../../components/List';
import store from '../../store/createStore';
import { AppWrap } from './styled';

function App() {
	return (
		<Provider store={store}>
			<AppWrap>
				<Header title="React Saga Giphy" />
				<SearchForm />
				<List />
			</AppWrap>
		</Provider>
	);
}

export default App;
