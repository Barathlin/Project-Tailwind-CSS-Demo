import { Route, Routes } from 'react-router-dom';
import './App.css';
import Emp from './Employee';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emp" element={<Emp />} />
      </Routes>
      
    </div>
  );
}

export default App;
