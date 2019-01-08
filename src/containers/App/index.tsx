import React from 'react';
import { Provider } from 'react-redux';
import SearchForm from '../../components/SearchForm';
import List from '../../components/List';
import store from '../../store/createStore';
import { AppWrap } from './styled';

function App() {
	return (
		<Provider store={store}>
			<AppWrap>
				<header>React Saga Giphy</header>
				<SearchForm />
				<List />
			</AppWrap>
		</Provider>
	);
}

export default App;
