import Link from 'next/link';
import Image from 'next/image'; 

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-black"> {/* Fondo negro aquí */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* <AcmeLogo /> */}
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src='/hero-desktop.png'
            alt="hero"
            width={1440}
            height={600}
            className='hidden md:block'
          />
          {/* 
          <Image
            src='/hero-mobile.png'
            alt="hero mobile"
            width={360}
            height={700}
            className='block md:hidden'
          />
          */}
          <div className="flex space-x-4">
            <Image
              src='/vintmenft.png'
              alt="hero"
              width={200}
              height={350}
              className='md:block'
            />
            <Image
              src='/vintmenft.png'
              alt="hero"
              width={200}
              height={350}
              className='md:block'
            />
            <Image
              src='/vintmenft.png'
              alt="hero"
              width={200}
              height={350}
              className='md:block'
            />
          </div>
        </div>
      </div>
    </main>
  );
}