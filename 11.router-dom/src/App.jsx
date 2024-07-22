import './App.css';
import { Routes, Route } from 'react-router-dom';
import Concant from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Concant />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
