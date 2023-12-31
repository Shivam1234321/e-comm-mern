import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Auth from './components/Auth';
import { Login } from './components/Login';
import { Product } from './components/Product';
import { ProductList } from './components/ProductList';
import { EditProduct } from './components/EditProduct';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Nav/>
     <Routes>
        <Route element={<Auth/>}>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/add" element={<Product />}></Route>
          <Route path="/product/:id" element={<EditProduct />}></Route>
          <Route path="/logout" element={<h1>Logout Component</h1>}></Route>
          <Route path="/profile" element={<h1>Profile Component</h1>}></Route>
        </Route> 
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
     </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
