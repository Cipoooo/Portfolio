import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MyNavbar from './components/MyNavbar/MyNavbar';
import About from './components/About/About';

function App() {
 
  return (
    <>
    <BrowserRouter>
    <MyNavbar></MyNavbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/About' element={<About></About>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
