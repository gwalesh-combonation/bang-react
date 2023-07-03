import React from 'react'
import Hero from '../components/Hero'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Site from '../layouts/Site'
import UpcomingMovies from '../components/home/UpcomingMovies'

const Index = () => {
  return (
    <div>
        <Site>
            <Hero />
            <UpcomingMovies />
        </Site>
    </div>
  )
}

export default Index