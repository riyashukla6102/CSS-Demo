import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="background">
    </div>
    <Body />
    
    </BrowserRouter>
    
  );
}

export default App;
