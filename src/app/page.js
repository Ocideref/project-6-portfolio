import '@/app/assets/home.css'

export default function Home() {
  return (
   <>
    <main className="">
      <div className="flex min-h-fit h-max flex-col items-start justify-center p-20">
        <h3 className="text-7xl mb-2 font-bold">Where Code<br/> And Design<br/> Come Together.</h3>
        <p className="text-md font-light">Full Stack Web Developer - Federico Aníbal González Fernández</p>
        <div className='flex items-start justify-center'>
          <a className='mr-4' href=''>
            <button class='b-transparent b'>
              Download CV
            </button>
          </a>
          <a href=''>
            <button class='b-transparent b'>
              Contact Me
            </button>
          </a>
        </div>
      </div>
      <div>

      </div>
    </main>
   </>
  )
}
