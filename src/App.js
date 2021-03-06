import React from 'react';
import GlobalStyles from './styles/globalStyles';
import Header from './components/Header/Header';
import Cards from './components/MainCards/Cards.js'; 
import { Provider } from './components/StateContext';

function App() {
  return (
    <Provider>
      <GlobalStyles/>
        <Header />
        <Cards />
    </Provider>
  );
};

export default App;