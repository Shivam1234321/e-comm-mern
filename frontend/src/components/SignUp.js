import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import checkAuth from '../auth/CheckAuth';

const SignUp = () =>{
const [name, setName]= useState("");
const [email, setEmail]= useState("");
const [password, setPassword]= useState("");
const navigate = useNavigate();
useEffect(() =>{
    if(checkAuth()){
        navigate('/');
    }
},[]);
const handelSubmit = async () =>{
    let result= await fetch('http://localhost:3030/register',{
        method: 'post',
        body: JSON.stringify({name, email, password}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    result= await result.json();
    localStorage.setItem('user', JSON.stringify(result?.data));
    navigate('/');
}
 return(
    <div className='register'>
        <h3>Register</h3>
        <input type='text' placeholder='Enter Name' className='inputBox' value={name} onChange={(e) => setName(e.target.value)}/>
        <input type='text' placeholder='Enter Email' className='inputBox' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type='password' placeholder='Enter Password' className='inputBox' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className='submitButton' onClick={handelSubmit} type='button'>Submit</button>
    </div>
 )
}

export default SignUp;