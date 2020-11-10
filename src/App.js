import Header from './components/Header.js';
import Filters from './components/Filters.js';
import Cards from './components/Cards.js';
import { Provider } from './components/StateContext';

function App() {
  return (
    <Provider>
      <div>
        <Header />
        <Filters />
        <Cards />
      </div>
    </Provider>
  );
};

export default App;