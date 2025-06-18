import React from 'react'


import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <main>
        <Hero />

        <hr className='border-00; bg-blue-600 h-[1.8px] my-[40px] mx-[84px]'/>

        <About />

        <hr className='border-00; bg-blue-600 h-[1.8px] my-[40px] mx-[84px]'/>

        <Skills />

        <Projects />


    </main>
  )
}

export default Home