import './App.css';
import Prodinamic from './components/Prodinamic';
import Nav from './components/Nav';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import MascaraC from './components/MascaraC';
import About from './components/About'


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Nav/>
        <Routes>
        <Route  exact path="/" element={<Home/>}/>
          <Route exact  path="/Prodinamic" element={<Prodinamic/>}/>
          
            
        </Routes>
      </BrowserRouter>
      
      <Footer/>
      
    </div>
  );
}

export default App;
