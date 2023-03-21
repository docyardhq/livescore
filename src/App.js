import React from 'react';
import './App.css';
import { Button } from '@mui/material';
import Navbar from './components/NavBar';
import MyCard from './components/MyCard';

function App() {
  return (
    <div className="App">
      <h1>Welcome to DocYard's live cricket score app</h1>
      <Navbar/>
      <Button variant='contained' color='primary'>Click here</Button>
      <MyCard/>
    </div>
  );
}

export default App;
