import React from 'react'
import devImage from '../assets/dev.png'




const About = () => {
  return (
    <div id='about' className="about w-[100%] h-[40rem] ">
              <div className="group w-[215px]">
                <h2 className='text-left w-full ml-24 text-5xl mt-20 font-semibold relative cursor-pointer text-[#00bcd4]'>About Me</h2>
                <div className="h-1 w-0 bg-[#00bcd4] mt-2 transition-all duration-300 group-hover:w-full ml-24"></div>
              </div>
              <div className="w-[100%] h-[40rem] flex justify-around">
                <div className='w-[55%] h-[80%] flex justify-center items-center text-2xl ml-24'>
                <p className='text-gray-400'>I am a Frontend developer with almost a year of experience in building web applications. I specialize in the React and other modern technologies to build real-world projects with seamless user experiences and master modern web technologies. Outside of coding, I enjoy continuous learning and sharing knowledge with others. </p>
    
                
              </div>
              <div className='flex justify-center w-[35%] h-[80%] mr-6'>
                  <img src={devImage} alt="profile image" loading='lazy' className="w-full h-auto object-contain mt-4"  />
                </div>
              </div>
              
            </div>
  )
}

export default About