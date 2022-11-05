import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar';
import './assets/sass/style.scss';
// Router
import {BrowserRouter,HashRouter, Routes, Route} from 'react-router-dom'
// Pages
import Home from './pages/Home';
import TutorialHome from './pages/tutoriales/Home';


const App = () => {

  const [data, setData] = useState([]);
  useEffect(()=> {
    fetch('./data/software.json')
    .then(res => res.json())
    .then(data => {
        const {software} = data;
        setData(software.category.development);
    });

  }, [])

  console.log(data);
  return (
    <>
    <HashRouter>
        <Navbar/>
  
        <Routes>
          <Route path='/' element={<Home data={data}/>} index />
          <Route path='/tutorial/:name' element={<TutorialHome data={data}/>}/>
          <Route path='*' element={<Home data={data}/>} />
        </Routes>
    </HashRouter>
    </>
  )
}

export default App