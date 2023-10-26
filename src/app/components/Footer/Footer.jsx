import React from 'react'
import '@/app/css/footer.css'

export const Footer = () => {
    return (
        <footer className='w-100 footer py-4'>
            <div className='w-11/12 mx-auto flex  align-center justify-between'>
                <p className='text-xs font-lighter uppercase'>
                    I'm a full remote worker from <a className='text-cyan-400' href="https://www.google.com/maps/place/Osorno,+Los+Lagos/@-40.5737086,-73.1341307,13z/data=!3m1!4b1!4m6!3m5!1s0x9616367d12e3d8d5:0xa1eeda2f4774e6f4!8m2!3d-40.5761897!4d-73.1149469!16zL20vMGNucWJ4?entry=ttu" target='_blank'>Osorno, Región de los lagos, Chile</a>
                </p>
                
            </div>
        </footer>
  )
}