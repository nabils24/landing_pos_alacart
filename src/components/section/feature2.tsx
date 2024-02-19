import Image from 'next/image';
import * as React from 'react';

const feature2 = () => {
  const style = {
    // height: '4.5rem',
    // width: '100%',
    // paddingTop: '6.5rem',
    // paddingBottom: '3.5rem',
    // paddingLeft: '5rem',
    // paddingRight: '5rem',
    backgroundImage: `url('https://telegra.ph/file/16ebb1270e8f3ffc1d161.png')`,
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
    <div className='' style={style}>
      <div className='container mx-auto p-4'>
        <div className='lg:flex'>
          <div className='lg:w-1/2'>
            <div className=''>
              <Image
                src='/svg/payIcon.svg'
                alt='NoWifi'
                className='dark:invert'
                width={500}
                height={24}
                priority
              />
            </div>
          </div>
          <div className='flex items-center justify-center lg:w-1/2'>
            <div className='mb-4 p-4'>
              <div className='text-grey-500 mt-2'>
                <h1 className='text-3xl'>Penerimaan Pembayaran</h1>
                <span>
                  Memungkinkan penjual untuk menerima pembayaran dari pelanggan
                  dengan berbagai metode pembayaran seperti tunai, kartu kredit,
                  debit, atau e-wallet
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div style={style} className='grid-cols-13 grid h-[41rem] p-10'>
    //   <div className='col-start-1 col-end-7 '>
    //     <div className='col-span-4 col-start-2 mt-10 flex h-[6rem] items-center justify-center px-5 '></div>
    //     <div className='col-span-4 col-start-2 mt-2 flex items-center justify-center gap-x-[2rem]'>
    //       <div className='col-span-4 flex h-[23rem] flex-col items-start justify-start pl-5 lg:order-last lg:w-[30rem]'>
    //         <div className='text-grey-500 mt-2'>
    //           <h1 className='text-3xl'>Penerimaan Pembayaran</h1>
    //           <span>
    //             Memungkinkan penjual untuk menerima pembayaran dari pelanggan
    //             dengan berbagai metode pembayaran seperti tunai, kartu kredit,
    //             debit, atau e-wallet
    //           </span>
    //         </div>
    //       </div>
    //       <div className='col-span-4 flex h-[23rem] items-center justify-center lg:order-first lg:w-[30rem]'>
    //         <div>
    //           <Image
    //             src='/svg/payIcon.svg'
    //             alt='PayIcon'
    //             className='dark:invert'
    //             width={500}
    //             height={24}
    //             priority
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default feature2;
