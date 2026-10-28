import React from 'react'
import './App.css'
import Fire from './assets/fire.png'
import Star from './assets/glowing-star.png'
import Party from './assets/partying-face.png'
import Navbar from './components/navbar/navbar'
import MovieList from './components/MovieLists/MovieList'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <main className='main-content'>
        <MovieList type="popular" title="Popular" emoji={Fire} />
        <MovieList type="top_rated" title="Top Rated" emoji={Star} />
        <MovieList type="upcoming" title="Upcoming" emoji={Party} />

      </main>
    </div>
  )
}

export default App
