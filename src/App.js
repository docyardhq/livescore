import React, {useEffect, useState} from 'react';
import './App.css';
import { Button } from '@mui/material';
import Navbar from './components/NavBar';
import MyCard from './components/MyCard';
import { getMatches } from './api/API';
function App() {

  const[matches, setMatches]= useState([]);

  useEffect(()=>
  {
    getMatches()
    .then((data)=>setMatches(data.matches))
    .catch(error=>alert("could not load data"));
  }, []);
  return (
    <div className="App">
      <h1>Welcome to DocYard's live cricket score app</h1>
      {
        matches.map((match)=>(
          <MyCard match="match"/>
        ))
      }
    </div>
  );
}

export default App;
