import * as React from 'react';

const feature7 = () => {
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
    borderRadius: '30px 30px 30px 30px'
  };
  return (
    <div style={style} classNameName='h-screen w-full p-10'>
      <div className='px-4 py-16'>
        <div className='mx-auto max-w-4xl'>
          <div className='mb-10 text-center'>
            <h2 className='text-4xl font-bold text-gray-800'>
              Pilihan Paket Terbaik Untuk Anda
            </h2>
            <p className='mt-3 text-gray-600'>
              Mulai berlangganan dengan memilih paket yang telah kami sediakan
              sesuai dengan kebutuhan Anda
            </p>
          </div>
          <div className='-mx-4 flex flex-wrap justify-center'>
            <div className='mb-4 w-full px-4 sm:mb-0 sm:w-1/3'>
              <div className='rounded-lg bg-white p-6 text-center shadow-lg'>
                <h3 className='mb-4 text-lg font-bold text-gray-700'>Basic</h3>
                <p className='mb-5 text-gray-600'>Rp0 / Trial</p>
                <p className='mb-6 text-sm text-gray-500'>
                  Kelola bisnis tanpa fitur tambahan
                </p>
                <ul className='mb-6 text-left'>
                  <li className='mb-2 flex items-center'>
                    <img
                      src='https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/check-circle-fill.svg'
                      alt='check'
                      className='mr-2 h-4 w-4'
                    />
                    Custom Role
                  </li>
                  <li className='flex items-center'>
                    <img
                      src='https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/check-circle-fill.svg'
                      alt='check'
                      className='mr-2 h-4 w-4'
                    />
                    Custom Configuration
                  </li>
                </ul>
                <button className='rounded bg-amber-500 px-6 py-2 font-bold text-white sm:w-9/12 md:w-9/12 lg:w-60'>
                  PILIH
                </button>
              </div>
            </div>
            <div className='mb-4  w-full px-4 sm:mb-0 sm:w-1/3 md:h-[15rem] lg:h-[15rem]'>
              <div className='rounded-lg bg-amber-100 p-6 text-center shadow-lg'>
              <span className="relative flex h-3 w-3">
                <span style={{border: 'solid',}} className="animate-ping absolute inline-flex h-full w-full rounded-full bg-deep-orange-900 opacity-90"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
                <h2 className='mb-4 text-lg font-bold text-gray-700'>
                  Standard
                </h2>
                <p className='mb-5 text-gray-600'>Rp2.000.000 / 6 Month</p>
                <p className='mb-6 text-sm text-gray-500'>
                  Kelola bisnis dengan fitur standard
                </p>
                <ul className='mb-6 text-left'>
                  <li className='mb-2 flex items-center'>
                    <img
                      src='https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/check-circle-fill.svg'
                      alt='check'
                      className='mr-2 h-4 w-4'
                    />
                    Custom Role
                  </li>
                  <li className='flex items-center'>
                    <img
                      src='https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/check-circle-fill.svg'
                      alt='check'
                      className='mr-2 h-4 w-4'
                    />
                    Custom Configuration
                  </li>
                </ul>
                <button className='rounded bg-amber-500 px-6 py-2 font-bold text-white sm:w-9/12 md:w-9/12 lg:w-60'>
                  PILIH
                </button>
              </div>
            </div>
            <div className='w-full px-4 sm:w-1/3'>
              <div className='rounded-lg bg-white p-6 text-center shadow-lg'>
                <h3 className='mb-4 text-lg font-bold text-gray-700'>
                  Advance
                </h3>
                <p className='mb-5 text-gray-600'>Rp10.000.000 / 12 Bulan</p>
                <p className='mb-6 text-sm text-gray-500'>
                  Kelola bisnis dengan fitur advance
                </p>
                <ul className='mb-6 justify-center text-left'>
                  <li className='mb-2 flex items-center'>
                    <img
                      src='https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/check-circle-fill.svg'
                      alt='check'
                      className='mr-2 h-4 w-4'
                    />
                    Custom Role
                  </li>
                  <li className='flex items-center'>
                    <img
                      src='https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/check-circle-fill.svg'
                      alt='check'
                      className='mr-2 h-4 w-4'
                    />
                    Custom Configuration
                  </li>
                </ul>
                <button className='rounded bg-amber-500 px-6 py-2 font-bold text-white sm:w-9/12 md:w-9/12 lg:w-60'>
                  PILIH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default feature7;
