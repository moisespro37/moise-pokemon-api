import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Pokemon from './components/Pokemon'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/pokemon/:id' element={<Pokemon></Pokemon>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
