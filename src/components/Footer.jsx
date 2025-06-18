import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        

        <div className="text-3xl font-semibold">Sahil.Dev</div>
        

        <div className='flex flex-col '>
          <div className="flex gap-6 mt-4 md:mt-0 text-lg font-medium">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition">About Me</a>
          <a href="#skilll" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
        </div>
        <div className="text-center text-lg text-gray-500 mt-4">
          © Sahil | All Rights Reserved.
        </div>
        </div>
      </div>

      
    </footer>
  )
}

export default Footer
