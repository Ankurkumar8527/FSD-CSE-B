import React, { useState, useEffect } from 'react';
import {BrowserRoute,Route,Routes} from 'react-router-dom'
import Main from './component/Main'
import Login from './component/Login'
import Registration from './component/Registration'
import Dashboard from './component/Dashboard'
import './App.css';

function App() {
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(false);
     
    return (
        <>
        <BrowserRoute>
        <Route>
            <Route path='/' element={<Main/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Registration/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            </Route>
        </BrowserRoute>
        </>
    )
}

export default App;