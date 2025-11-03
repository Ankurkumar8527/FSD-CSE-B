import React from 'react'
import Book from './component/Book'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import { useEffect } from 'react'
const App = () => {
//   const books=[
//     {image: "",title:"Physics",price: 567},
//   {image: "",title:"Math",price: 527},
// {image: "",title:"Chemistry",price: 367}]
useEffect(()=>
{
  fetch('https://fakestoreapi.com/products')
})
  return (
    <div>
    <Header/>
    <div className='booklist'>
      {
        books.map((b,i)=>(
         <Book key={i} book={b}/>
        ))
      }
    </div>
    <Footer/>
    </div>
  )
}

export default App
