'use client';
import Image from 'next/image';
import * as React from 'react';

const Footer = () => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const LINKS = [
    {
      title: 'Terms & Policies',
      items: ['Terms & Services', 'Privacy Policy']
    },
    {
      title: 'Contact',
      items: [
        'Telepon : (0361) 123 456',
        'Whatsapp : 0851 2345 6789',
        'Email : help@alacarte.id'
      ]
    }
  ];

  const changeColorToWhite = {
    fill: ' #ffffff'
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className='h-full bg-gray-800 p-5 text-white'>
      <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between md:flex-row lg:flex-row'>
        <div className='mb-4 md:mb-0'>
          <Image
            src='/svg/LogoWhite.svg'
            alt='Appstore'
            width={135}
            height={135}
            className='mb-3'
          ></Image>
          <p className='text-base'>
            Jl. Patih Jelantik, Istana Kuta Galeria, Blok Broadway 2, Badung,
            Bali
          </p>
          <div className='mt-3 flex '>
            <a href='#' className='mr-2'>
              <Image
                src='/svg/App_Store.svg'
                alt='Appstore'
                width={200}
                height={200}
              ></Image>
            </a>
            <a href='#'>
              <Image
                src='/svg/Google_Play.svg'
                alt='Appstore'
                width={200}
                height={200}
              ></Image>
            </a>
          </div>
        </div>
        <div className='flex w-full flex-col justify-between md:w-auto md:flex-row'>
          <div className='mb-4 md:mb-0 md:mr-10'>
            <h5 className='mb-2 font-bold'>Contact</h5>
            <p className='mb-1 text-sm'>Telepon : (0361) 123 456</p>
            <p className='mb-1 text-sm'>Whatsapp: 0851 2345 6789</p>
            <p className='text-sm'>Email : help@alacarte.id</p>
          </div>
          <div>
            <h5 className='mb-2 font-bold'>Terms & Policies</h5>
            <p className='mb-1 text-sm'>Terms & Services</p>
            <p className='text-sm'>Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className='mt-5 flex items-center justify-center gap-5 border-t border-gray-600 pt-3'>
        <p className='text-xs'>
          &copy; Copyright {currentYear} PT Semua Aplikasi Indonesia. All Rights
          Reserved.
        </p>
        <div className='flex'>
          <a href='#' className='mr-2'>
            <img
              src='https://api.iconify.design/bi:facebook.svg?color=white'
              alt='Facebook'
              className='w-5'
            ></img>
          </a>
          <a href='#' className='mr-2'>
            <img
              src='https://api.iconify.design/akar-icons:linkedin-fill.svg?color=white'
              alt='LinkedIn'
              className='w-5'
            ></img>
          </a>
          <a href='#'>
            <img
              src='https://api.iconify.design/akar-icons:instagram-fill.svg?color=white'
              alt='Instagram'
              className='w-5'
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
