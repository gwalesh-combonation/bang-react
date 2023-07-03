import React, { Children } from 'react'
import Header from '../components/inc/Header';
import Footer from '../components/inc/Footer';
import Hero from '../components/Hero';


const Site = ({children}) => {
  return (
    <div>
        <Header />
            <main>
                { children }
            </main>
        <Footer />
    </div>
  )
}

export default Site