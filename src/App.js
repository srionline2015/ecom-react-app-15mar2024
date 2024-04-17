import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';

import { BrowserRouter } from 'react-router-dom';

//Routing
import RoutingConfig from './Routing/RoutingConfig';
import Menu from './Routing/Menu';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}

     {/* <Home></Home> */}

      <BrowserRouter>
          <Menu></Menu>
          <RoutingConfig></RoutingConfig>
      </BrowserRouter>

    </div>
  );
}

export default App;
