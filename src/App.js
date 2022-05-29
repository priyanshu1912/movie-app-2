import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import LandingPage from './components/landingPage/LandingPage';
import OpenMovie from './components/openMovie/OpenMovie';
import SearchPage from './components/searchPage/SearchPage';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/home' element={<LandingPage/>}/>
      <Route exact path='/home/movies' element={<OpenMovie/>}/>
      <Route exact path='/home/search' element={<SearchPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
