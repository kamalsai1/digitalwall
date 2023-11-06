import './App.css';
import React from 'react';
import Home from './components/Home.js'
import PostsMain from './components/PostsMain.js';
import { DataProvider } from './contextManager'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<PostsMain />} />
      </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;


/*
import './App.css';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar.js';
import BoardBlock from './components/BoardBlock.js';
import axios from 'axios';
import { DataProvider } from './contextManager'

function App() {
  const [boards, setBoards] = React.useState([]);
  const fetch = async () => {
    const response = await axios.get('http://localhost:3001/board')
    setBoards(response.data);
  }
  useEffect(() => {
    fetch();
  }, [setBoards])

  return (
    <DataProvider>
      <div className="App">
        <Navbar />
        <div><h1>My Boards</h1></div>
        <BoardBlock />
      </div>
    </DataProvider>
  );
}

export default App;

*/