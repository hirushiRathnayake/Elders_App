import Who from './Pages/Who';
import Home from './Pages/Home';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import './App.css';
import {BrowserRouter,Router,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
 
function App() {
  return (
  <div className='App'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Who' element={<Who/>}/>
        <Route path='/Work' element={<Work/>}/>
        <Route path='/Contact' element={<Contact/>}/>

    </Routes>
    </BrowserRouter>
    
  </div>
  );
}

export default App;
