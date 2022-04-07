import  { Route, BrowserRouter, Routes } from 'react-router-dom';
import key from 'uniqid';
import Home from './home/index';
import Login from './auth/Login';
import Signup from './auth/Signup';


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' key={key()} element={<Home />} />
      <Route path='/login' key={key()} element={<Login />} />
      <Route path='/signup' key={key()} element={<Signup />} />
    </Routes>
  </BrowserRouter>
);

export default App;
