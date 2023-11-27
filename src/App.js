import logo from './logo.svg';
import './App.css';
import Routercom from './Routing/Router';
import { BrowserRouter } from 'react-router-dom';
import Mobilecomp from './Component/Mobile-res/Mobilecomp';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routercom/>
      </BrowserRouter>
    </div>
  );
}

export default App;
