import Contact from './components/Contact';
import Hero from './components/Hero';
import Who from './components/Who';
import Work from './components/Work';
import './App.css';
import {BrowserRouter,Router,Routes,Route} from "react-router-dom";
 
function App() {
  return (
  <div className='App'>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/Who' element={<Who/>}/>
        <Route path='/Work' element={<Work/>}/>
        <Route path='/Contact' element={<Contact/>}/>

    </Routes>
    </BrowserRouter>
    
  </div>
  );
}

export default App;
