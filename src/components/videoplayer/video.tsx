import * as React from 'react';

const videos = () => {
  const style = {
    // height: '4.5rem',
    // width: '100%',
    // paddingTop: '6.5rem',
    // paddingBottom: '3.5rem',
    // paddingLeft: '5rem',
    // paddingRight: '5rem',
    backgroundImage: `url('https://telegra.ph/file/bc14a05088c0306da4b8d.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
  const styleVideo = {
    borderRadius: '30px 30px 30px 30px'
  };
  return (
    <div style={style} className='h-screen w-full p-10'>
      <div className='grid grid-cols-6'>
        <div className='col-span-4 col-start-2 content-center items-center justify-center'>
          <div className='flex flex-col items-center px-4 py-8'>
            <div className='text-center'>
              <h1 className='mb-2 text-center text-3xl font-bold'>
                <span className='text-amber-500'>Ala</span>{' '}
                <span className='text-red-600'>Carte </span>
                Hadir Sebagai Solusi
              </h1>
              <h2 className='mb-4 text-center text-xl text-gray-700'>
                Ala Carte hadir dengan efisien untuk membantu anda dalam
                mengelola penjualan, inventaris, dan transaksi pelanggan.{' '}
              </h2>
            </div>
            <div className='mt-8 overflow-hidden rounded-lg bg-gray-300 shadow-lg sm:w-full lg:w-3/5'>
              <div className='relative block h-48 w-full sm:h-64 md:h-80 lg:h-96'>
                {/* <video
                  src='https://www.petanikode.com/img/html-video/cat-herd.webm'
                  className='w-full rounded-md shadow-2xl sm:h-64 md:h-80 lg:h-full lg:w-[800px]'
                  controls
                ></video> */}
                <iframe
                  width='100%'
                  height='100%'
                  src='https://www.youtube.com/embed/nuH6Hh_do8g'
                  title='Video'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default videos;
