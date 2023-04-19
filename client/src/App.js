import './App.css';
import Navbar from "./components/NavBar";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/Register';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      < Navbar />
      <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='cart' element={<Cart />}></Route>
       <Route path='login' element={<Login />}></Route>
       <Route path='register' element={<Register />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
