import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
//import axios from 'axios';

function SignIn() {

  const navigate = useNavigate();
  function handleClick() {
    navigate("/login");
  }

  const [userName, setName] = useState('');
  const [password, setPassword] = useState('');

  const passwordChange = event => {
    setName(event.target.value);
  }

  const nameChange = event => {
    setPassword(event.target.value);
  }

  function handleSubmit(){
    navigate("/home")
  }

  /*useEffect(() => {
    function handleSubmit(e){
      e.preventDefault();
      axios.post("https://localhost:7195/UserLogin",{
        name: userName,
        password: password
      });
      navigate("/home");
    }
  })*/

  return (
    <div className='App min-vh-100 d-flex justify-content-center align-items-center'>
      <Card style={{ width: '22rem' }}>
        <Form className='p-3'>
          <div className='p-2'>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Control type='email' placeholder='Email' name='name' onChange={nameChange} value={userName}/>
            </Form.Group>
          </div>
          <div className='p-2'>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Control type='password' placeholder='Password' name='password' onChange={passwordChange} value={password}/>
            </Form.Group>
          </div>
          <div className='d-flex justify-content-end'>
            <div className='p-2'>
              <Button variant='outline-success' onClick={handleSubmit}>Sign In</Button>
            </div>
            <div className='p-2'>
              <Button variant='outline-success' onClick={handleClick}>Login</Button>
            </div>
          </div>
        </Form>
      </Card>
    </div>
  )
}

export default SignIn;