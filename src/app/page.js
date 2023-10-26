import '@/app/css/home.css'
import MainImage from '@/app/components/Animations/MainImage'
import {Cloudinary} from "@cloudinary/url-gen";

const App = () => {
  const cld = new Cloudinary({cloud: {cloudName: 'dn6shhlok'}});
};

export default function Home() {
  return (
   <>
    <main className="flex w-100">
      <div className="flex flex-col items-start justify-center p-40">
        <h3 className="text-7xl mb-2 font-bold">Where Code<br/> And Design<br/> Come Together.</h3>
        <p className="text-md font-light mt-2">Full Stack Web Developer - <span className='primary-color'>Federico Aníbal González Fernández</span></p>
        <div className='flex items-start justify-center mt-7'>
          <a className='mr-6' href=''>
            <button class='primary-button px-7 py-2'>
              Download CV
            </button>
          </a>
          <a href=''>
            <button class='secondary-button px-7 py-2'>
              Contact Me
            </button>
          </a>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <MainImage/>
      </div>
    </main>
    <div className='main'></div>
   </>
  )
}
