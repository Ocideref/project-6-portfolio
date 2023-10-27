import CardWithDecorativeImage from '@/app/components/Projects/Projects'
import React from 'react'
import '@/app/css/projects.css'

const page = () => {
  return (
    <>
      <h3 className='w-100 text-center font-bold text-3xl'>Projects</h3>
      <CardWithDecorativeImage/>
    </>
  )
}

export default page