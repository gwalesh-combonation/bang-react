import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import Site from './layouts/Site';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
