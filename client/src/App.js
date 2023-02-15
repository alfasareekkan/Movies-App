
import {
  Routes, Route
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
