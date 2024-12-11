
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Card from './pages/card';
import Header from './components/header/header';
import Details from './pages/details';
import CreateCard from './pages/create-card';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <Routes>
        <Route path='/products' element={<Home/>}/>
        <Route path='/card' element={<Card/>}/>
        <Route path='/create-product' element={<CreateCard/>}/>
        <Route path="/products/:id" element={<Details/>}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
