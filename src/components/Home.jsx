import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
    const {logOut, user} = useUserAuth();

    console.log(user)

    const navigate = useNavigate();

    const handleLogout = async()=>{
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div>
      <h2>Welcome to home page</h2>
      <p>Hi, {user.email}</p>
      <p>UID: {user.uid}</p>
      <Button onClick={handleLogout} variant='outline-danger'>Log Out</Button>
    </div>
  )
}

export default Home
