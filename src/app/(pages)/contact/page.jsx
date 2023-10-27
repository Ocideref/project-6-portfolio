import React from 'react'
import ContactForm from '@/app/components/ContactForm/ContactForm'
import ContactImage from '@/app/components/Animations/ContactImage'

const page = () => {
  return (
    <>
      <div className='font-bold text-4xl text-center'>Contact Me</div>
      <div className='flex justify-center'>
        <ContactForm/>
        <div className='flex w-2/5 mt-8'>
          <ContactImage/>
        </div>
      </div>
    </>
  )
}

export default page

