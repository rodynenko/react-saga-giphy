import React from 'react';
import SearchForm from '../../components/SearchForm';
import List from '../../components/List';
import { AppWrap } from './styled';

function App() {
  return (
    <AppWrap>
      <header>React Saga Giphy</header>
      <SearchForm />
      <List />
    </AppWrap>
  );
}

export default App;
