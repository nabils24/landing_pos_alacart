import Image from 'next/image';
import * as React from 'react';

const feature3 = () => {
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

          <div className='lg:w-1/2'>
            <div className=''>
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
      </div>
    </div>
  );
};

export default feature3;
