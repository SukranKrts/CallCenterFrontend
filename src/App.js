import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import SignIn from './Pages/SignIn';
import Login from './Pages/Login';
import Home from './Pages/Home';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
