import * as React from 'react';

const feature = () => {
  const style = {
    // height: '4.5rem',
    // width: '100%',
    // paddingTop: '6.5rem',
    // paddingBottom: '3.5rem',
    // paddingLeft: '5rem',
    // paddingRight: '5rem',
    backgroundImage: `url('https://telegra.ph/file/57d23472e7c1d49feb8c7.png')`,
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
    <div style={style} className='grid-cols-13 grid h-[41rem] w-full p-10'>
      <div className='col-start-1 col-end-7 '>
        <div className='col-span-4 col-start-2 mt-10 flex h-[6rem] items-center justify-center px-5'>
          <h1>
            <span className='text-amber-500'>SUBSCRIBE</span>{' '}
            <span className='text-black'>Sekarang Juga</span>
          </h1>
        </div>
        <div className='col-span-4 col-start-2 mt-2 flex items-center justify-center'>
          {/* <div
            style={styleCardKanan}
            className='col-span-4 flex h-[23rem] flex-col items-center justify-center bg-amber-700 lg:order-last lg:w-[30rem]'
          >
            <div className='col-span-4 col-start-2 flex items-end justify-center text-white'>
              <div className='col-span-1'>Rp</div>
              <div className='col-span-1'>
                <h1 className='text-9xl'>0</h1>
              </div>
            </div>
            <div className='mt-2 text-white'>
              <h5>Selama 6 Bulan</h5>
            </div>
            <div className='mt-3'>
              <button
                type='button'
                className='inline-flex items-center rounded-lg bg-white px-5 py-3 text-center text-base font-bold text-amber-500 hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800'
              >
                Subscription
              </button>
            </div>
          </div>
          <div
            style={styleCardKiri}
            className='col-span-4 flex h-[23rem] items-center justify-center bg-white lg:order-first lg:w-[30rem]'
          >
            <div>
              <h3>Keuntungan yang didapat</h3>
              <li className='list-none'>
                <ul className='flex items-center gap-1'>
                  <ion-icon
                    name='checkmark-circle-outline'
                    class='text-2xl text-amber-500'
                  ></ion-icon>
                  <span className='text-xl'>Penerimaan Pembayaran</span>
                </ul>
                <ul className='flex items-center gap-1'>
                  <ion-icon
                    name='checkmark-circle-outline'
                    class='text-2xl text-amber-500'
                  ></ion-icon>
                  <span className='text-xl'>Penjualan Mode Offline</span>
                </ul>
                <ul className='flex items-center gap-1'>
                  <ion-icon
                    name='checkmark-circle-outline'
                    class='text-2xl text-amber-500'
                  ></ion-icon>
                  <span className='text-xl'>Atur Promosi dan diskon</span>
                </ul>
                <ul className='flex items-center gap-1'>
                  <ion-icon
                    name='checkmark-circle-outline'
                    class='text-2xl text-amber-500'
                  ></ion-icon>
                  <span className='text-xl'>Keamanan data terjaga</span>
                </ul>
                <ul className='flex items-center gap-1'>
                  <ion-icon
                    name='checkmark-circle-outline'
                    class='text-2xl text-amber-500'
                  ></ion-icon>
                  <span className='text-xl'>Pencatatan penjualan</span>
                </ul>
                <ul className='flex items-center gap-1'>
                  <ion-icon
                    name='checkmark-circle-outline'
                    class='text-2xl text-amber-500'
                  ></ion-icon>
                  <span className='text-xl'>Pengelolaan Karyawan</span>
                </ul>
              </li>
            </div>
          </div> */}
          <div className='flex flex-col sm:flex-row'>
            <div className='rounded-lg bg-purple-500 sm:w-full sm:rounded-bl-none sm:rounded-br-lg sm:rounded-tl-lg sm:rounded-tr-none md:w-1/2 lg:w-1/2'>
              <div className='p-6'>
                <h2 className='mb-4 text-2xl font-bold text-white'>
                  Card Title
                </h2>
                <p className='mb-4 text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam auctor, nunc id aliquet lacinia, nisl justo efficitur
                  nunc, id lacinia nunc nunc id lacinia nunc.
                </p>
                <button className='rounded-full bg-purple-700 px-6 py-3 font-bold text-white hover:bg-purple-900'>
                  Get started
                </button>
              </div>
            </div>
            <div className='rounded-lg bg-purple-500 sm:w-full sm:rounded-bl-lg sm:rounded-br-none sm:rounded-tl-none sm:rounded-tr-lg md:w-1/2 lg:w-1/2'>
              <div className='p-6'>
                <p className='text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam auctor, nunc id aliquet lacinia, nisl justo efficitur
                  nunc, id lacinia nunc nunc id lacinia nunc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default feature;
