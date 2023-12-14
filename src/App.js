import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Cart } from './pages/Cart';
import { Footer } from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/carrinho' element={<Cart/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
