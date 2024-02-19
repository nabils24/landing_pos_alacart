import Image from 'next/image';
import * as React from 'react';

const Jumbotron = () => {
  const border = {
    border: '5px solid #000'
  };
  const style = {
    // paddingTop: '10rem',
    // paddingLeft: '5rem',
    // paddingRight: '5rem',

    backgroundImage: `url('https://telegra.ph/file/04df58e4d5536282a422b.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
  const padding = {
    paddingTop: '6rem',
    paddingLeft: '2rem'
  };
  return (
    <div style={style} className='h-2/5'>
      <div className='container mx-auto p-4'>
        <div className='lg:flex'>
          <div className='flex items-center justify-center lg:w-1/2'>
            <div className='mb-4 p-4'>
              <div className='col-start-1 col-end-7 '>
                <div className='col-span-4 col-start-2 mt-10 flex h-[6rem] items-center justify-center px-5 '>
                  <div className='col-span-4 col-start-2 mt-10 flex h-[6rem] w-full items-center justify-start'>
                    <h1>
                      Lancarkan dan Kelola Bisnis Melalui
                      <span className='text-amber-500'> Ala</span>{' '}
                      <span className='text-red-600'>Carte</span>
                    </h1>
                  </div>
                </div>
                <div className='col-span-4 col-start-2 mt-5 flex w-full justify-start px-5'>
                  <span className='text-base'>
                    Ala Carte hadir membantu anda mengelola dan melancarkan
                    bisnis dalam satu genggaman.
                  </span>
                </div>
                <div className='col-span-4 col-start-2 mt-2 flex h-[6rem] items-center justify-start gap-2 px-5'>
                  <div>
                    <button
                      type='button'
                      className='animate-bounce inline-flex items-center rounded-full bg-amber-500 px-5 py-3 text-center text-base font-medium text-white hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800'
                    >
                      Coba Sekarang Gratis
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-4/5'>
            <Image
              src='/svg/LayarV2.svg'
              alt='NoWifi'
              className='p-[55px] dark:invert'
              width={800}
              height={50}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
