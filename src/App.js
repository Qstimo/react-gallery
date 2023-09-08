
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Routs from './Routs/Routs';
import Header from './Component/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routs />
    </div>
  );
}

export default App;
