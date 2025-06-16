import React from 'react'
import MyComponent from '../components/MyComponent'
import devImg from '../assets/dev_4.png'

const Home = () => {
  return (
    <main>
        <div className='hero_section w-full flex justify-around h-[calc(100vh-200px)] gap-10'>

            <div className=' w-[40%] flex justify-center flex-col items-center text-5xl'>
                <div className='pb-6'>Hi, My name Is <span className='text-yellow-300'>Sahil</span></div>
                <div className='pb-6'>and I am a passionate</div>
                <MyComponent />
            </div>
            <div className='flex justify-center w-[40%]'>
              <img src={devImg} alt="profile image" loading='lazy' className="w-full h-auto object-contain mt-4"  />
            </div>
        </div>

        <hr className='border-00; bg-blue-600 h-[1.8px] my-[40px] mx-[84px]'/>
    </main>
  )
}

export default Home