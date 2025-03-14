import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { MovieCard } from './MovieCard'
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom"
import Favorites from './pages/Favorites'

function App() {
    // const counter =1;
  
return(
    <main className='main-content'>
        <Routes>
            <Route path = "/" element={<Home />}/>
            <Route path="/favorites" element={<Favorites />}/>
        </Routes>
    </main>
);
}

export default App;
