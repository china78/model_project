import './App.css';
import { Routes, Route, useNavigate } from 'react-router';
import Header from '@/components/Header';
import Home from '@/pages/home';
import Goods from '@/pages/goods';

function App() {
  let navigate = useNavigate();

  const goPath = (path) => {
    navigate(path)
  }

  return (
    <div className="App">
      <Header goPath={goPath}  />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/*
          category1: 木火土金水
          category2: 木雕、手串
        */}
        <Route path='/goods/:category1?' element={<Goods />}></Route>
      </Routes>
    </div>
  );
}

export default App;

