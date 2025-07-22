import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouteList from './routeList';
import Navbar from './layouts/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RouteList />
    </BrowserRouter>
  );
}

export default App;
