import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Auth from './components/Auth';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Nav/>
     <Routes>
        <Route element={<Auth/>}>
          <Route path="/" element={<h1>Product Component</h1>}></Route>
          <Route path="/add" element={<h1>Add Product Component</h1>}></Route>
          <Route path="/update" element={<h1>Update Product Component</h1>}></Route>
          <Route path="/logout" element={<h1>Logout Component</h1>}></Route>
          <Route path="/profile" element={<h1>Profile Component</h1>}></Route>
        </Route> 
        <Route path="/signup" element={<SignUp/>}></Route>
     </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
