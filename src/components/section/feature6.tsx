import Image from 'next/image';
import * as React from 'react';

const feature6 = () => {
  const style = {
    // height: '4.5rem',
    // width: '100%',
    // paddingTop: '6.5rem',
    // paddingBottom: '3.5rem',
    // paddingLeft: '5rem',
    // paddingRight: '5rem',
    backgroundImage: `url('https://telegra.ph/file/b27368fe56f7c76a9d70d.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div className='' style={style}>
      <div className='container mx-auto p-4'>
        <div className='lg:flex'>
          <div className='flex items-center justify-center lg:w-1/2'>
            <div className='mb-4 p-4'>
              <div className='col-start-1 col-end-7 '>
                <div className='col-span-4 col-start-2 mt-10 flex h-[6rem] items-center justify-center px-5 '>
                  <div className='col-span-4 col-start-2 mt-10 flex h-[6rem] w-full items-center justify-start'>
                    <h1>
                      Unduh
                      <span className='text-amber-500'> Ala</span>{' '}
                      <span className='text-red-600'>Carte</span>
                      <br></br>Sekarang!
                    </h1>
                  </div>
                </div>
                <div className='col-span-4 col-start-2 mt-5 flex w-full justify-start px-5'>
                  <span className='text-base'>
                    Unduh dan kelola bisnis anda dengan lebih mudah, praktis,
                    dan efisien menggunakan aplikasi Ala Carte.
                  </span>
                </div>
                <div className='col-span-4 col-start-2 mt-5 flex h-[6rem] items-center justify-start gap-2 px-5'>
                  <div>
                    <a href='#'>
                      <Image
                        src='/svg/Google_Play.svg'
                        alt='logoIcon'
                        className='dark:invert'
                        width={200}
                        height={24}
                        priority
                      />
                    </a>
                  </div>
                  <div>
                    <a href='#'>
                      <Image
                        src='/svg/App_Store.svg'
                        alt='logoIcon'
                        className='dark:invert'
                        width={200}
                        height={24}
                        priority
                      />
                    </a>
                  </div>
                </div>
                <div className='col-span-4 col-start-2 flex w-full justify-start px-5'>
                  <span className='text-base'>
                    *hanya tersedia untuk perangkat tablet atau Ipad.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:w-1/2'>
            <div className=''>
              <Image
                src='/svg/mockupipad.svg'
                alt='NoWifi'
                className='dark:invert'
                width={650}
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

export default feature6;
