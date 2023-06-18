// import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

import { Route, Routes } from "react-router-dom"
import Layout from './views/Layout';
import BackendTodo from './views/BackendTodo';

import { useSelector } from 'react-redux';


function App() {




  return <div className="App">
    <header className="App-header">
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<BackendTodo />} />
          <Route path='/todo' element={<BackendTodo />} />
        </Route>
      </Routes>
    </header>
  </div>


}

export default App;
