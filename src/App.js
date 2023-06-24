import axios from 'axios';

import Card from './components/Card/Card.jsx';
import Navbar from './components/navBar/NavBar.jsx';
import About from './components/About/About';
import Form from './components/Form/Form';

import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import './App.css';

function App() {
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)

   const location = useLocation()
   const navigate = useNavigate()

   useEffect(() => {
      const fetchData = async (url) => {
         try{
            const response = await axios.get(url)
            const data = response.data

            setCharacters(prevChar => [...prevChar, ...data.results])

            if(data.info.next) fetchData(data.info.next)

         }catch(error){
            console.error('Error al obtener los personajes: ', error)
         }
      }

      fetchData('https://rickandmortyapi.com/api/character');
   }, [])

   const handleSearch = async (query) => {
      try{
         const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
         const data = response.data

         if(data.results.length > 0) setCharacters(data.results)

      }catch(error){
         setCharacters([])

         console.error('Error al buscar el personaje: ', error)
      }
   }

   const login = (userData) => {

      const EMAIL = 'fede_maidana4@hotmail.com'
      const PASSWORD = '123abcd'

      if(userData.password === PASSWORD && userData.email === EMAIL){
         setAccess(true)
         navigate('/home')
      }
   }

   const logout = () => {
      setAccess(false)
      navigate('/')
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access])

   return (
      <div className='App'>
         {location.pathname !== '/' && <Navbar onSearch={handleSearch} onLogout={logout} />}
         <Routes>
            <Route path='/' element={<Form onLogin={login}/>} />
            {access && <Route path='/home' element={<Card characters={characters} />}/>}
            <Route path='/about' element={<About />} />
         </Routes>
      </div>
   );
}

export default App; 
