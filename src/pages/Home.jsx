import React from 'react'


import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <main>
        <Hero />

        <hr className='border-00; bg-blue-600 h-[1.8px] my-[40px] mx-[84px]'/>

        <About />

        <hr className='border-00; bg-blue-600 h-[1.8px] my-[40px] mx-[84px]'/>

        <Skills />


    </main>
  )
}

export default Home