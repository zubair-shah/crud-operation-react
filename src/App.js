import logo from './logo.svg';
import './App.css';
import Create from './components/create'
import Read from './components/read'
import Update from './components/update'
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom'

function App() {
  return (
<div className="main">
      <h2 className="main-header">React Crud Operations</h2>
    <div>
      <Router>
        <Routes>
        <Route exact path={'/read'} element={<Read />} ></Route>
          <Route exact path={'/create'} element={<Create />} > </Route>
          <Route exact path={'/update'} element={<Update />} > </Route>

        </Routes>
      </Router>
  
    </div>
    </div>
  );
}

export default App;
