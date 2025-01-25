import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from '@/pages/home';
import Header from '@/components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

