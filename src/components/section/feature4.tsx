import Image from 'next/image';
import * as React from 'react';

const feature4 = () => {
  const style = {
    // height: '4.5rem',
    // width: '100%',
    // paddingTop: '6.5rem',
    // paddingBottom: '3.5rem',
    // paddingLeft: '5rem',
    // paddingRight: '5rem',
    backgroundImage: `url('https://telegra.ph/file/6926f59bdb8380aa70df6.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
  const styleVideo = {
    marginTop: '45px',
    height: '425px',
    width: 'auto',
    borderRadius: '14px'
  };
  const styleCardKiri = {
    borderRadius: '15px 0px 0px 15px',
    boxShadow: '5px 5px 15px -5px black'
  };
  const styleCardKanan = {
    borderRadius: '0px 15px 15px 0px',
    boxShadow: '5px 5px 15px -5px black'
  };
  return (
    // <div className='container mx-auto p-4'>
    //   <div className='lg:flex'>
    //     <div className='lg:w-1/2'>
    //       <div className='mb-4 bg-white p-4 shadow-md'>
    //         <h2 className='mb-2 text-lg font-semibold'>Kolom Kiri</h2>
    //         <p>Isi kolom kiri di sini...</p>
    //       </div>
    //     </div>

    //     <div className='lg:w-1/2'>
    //       <div className='bg-white p-4 shadow-md'>
    //         <h2 className='mb-2 text-lg font-semibold'>Kolom Kanan</h2>
    //         <p>Isi kolom kanan di sini...</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div style={style} className='grid-cols-13 grid h-[30rem] p-10'>
      <div className='col-start-1 col-end-7 '>
        <div className='col-span-4 col-start-2 mt-10 flex h-[6rem] items-center justify-center px-5 '>
          <div className='col-span-4 col-start-2 mt-10 flex h-[6rem] items-center justify-center px-5'>
            <h1>
              <span className='text-black'>Mulai Bergabung Bersama kami</span>
            </h1>
          </div>
        </div>
        <div className='col-span-4 col-start-2 mt-10 flex justify-center px-5'>
          <Image
            src='/svg/Logo.svg'
            alt='logoIcon'
            className='dark:invert'
            width={150}
            height={24}
            priority
          />
        </div>
        <div className='col-span-4 col-start-2 mt-5 flex h-[6rem] items-center justify-center gap-2 px-5'>
          <div>
            <Image
              src='/svg/Google_Play.svg'
              alt='logoIcon'
              className='dark:invert'
              width={200}
              height={24}
              priority
            />
          </div>
          <div>
            <Image
              src='/svg/App_Store.svg'
              alt='logoIcon'
              className='dark:invert'
              width={200}
              height={24}
              priority
            />
          </div>
        </div>
        {/* <div className='col-span-4 col-start-2 mt-2 flex items-center justify-center gap-x-[5rem]'>
          <div className='col-span-4 flex h-[23rem] flex-col items-start justify-start pl-5 lg:order-first lg:w-[30rem]'>
            <div className='text-grey-500 mt-2'>
              <h1 className='text-3xl'>Penerimaan Pembayaran</h1>
              <span>
                Memungkinkan penjual untuk menerima pembayaran dari pelanggan
                dengan berbagai metode pembayaran seperti tunai, kartu kredit,
                debit, atau e-wallet
              </span>
            </div>
          </div>
          <div className='col-span-4 flex h-[23rem] items-center justify-center  lg:order-last lg:w-[30rem]'>
            <div>
              <Image
                src='/svg/NoWifi.svg'
                alt='NoWifi'
                className='dark:invert'
                width={500}
                height={24}
                priority
              />
            </div>
          </div>
        </div>
        <div className='bottom-0 left-0 right-0 mt-[3rem] flex justify-center'>
          <h3 className='text-base text-amber-500'>Lihat Selengkapnya</h3>
        </div> */}
      </div>
    </div>
  );
};

export default feature4;
