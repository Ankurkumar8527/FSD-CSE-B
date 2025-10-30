import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Book from './component/Book'
import './App.css'
const App = () => {
  return(
  
      <div className='book-list'>
      <Book />
      <Book />
      <Book />
    </div>
  )
}

export default App