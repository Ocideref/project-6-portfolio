import React from 'react'
import AboutImage from '@/app/components/Animations/AboutImage'
import CardWithDecorativeImage from '@/app/components/Cards/Cards';
import {Cloudinary} from "@cloudinary/url-gen";
import '@/app/css/about.css'

const App = () => {
  const cld = new Cloudinary({cloud: {cloudName: 'dn6shhlok'}});
};

const page = () => { 
  return (
    <main className="flex w-100 bg-slate-50 text-slate-950">
      <div className="flex flex-col items-start justify-center py-0 px-40">
        <h3 className="text-3xl mb-2 font-bold">About Me</h3>
        <p className="text-md font-light mt-2">Hi there! My name is <span className='primary-color'>Federico</span> and im a Full Stack Developer.</p>
        <p className="text-md font-light">Here are some of my skills:</p>
        <CardWithDecorativeImage/>
      </div>
      <div className='flex items-end justify-center'>
        <AboutImage/>
      </div>
    </main>
  )
}

export default page