'use client';
import {
  Accordion,
  AccordionBody,
  AccordionHeader
} from '@material-tailwind/react';
import * as React from 'react';

const feature5 = () => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const LINKS = [
    {
      title: 'Product',
      items: ['Overview', 'Features', 'Solutions', 'Tutorials']
    },
    {
      title: 'Company',
      items: ['About us', 'Careers', 'Press', 'News']
    },
    {
      title: 'Resource',
      items: ['Blog', 'Newsletter', 'Events', 'Help center']
    }
  ];

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

  return (
    <div style={style} className='grid-cols-13 grid h-full p-10'>
      <div className='col-start-1 col-end-7 '>
        <div className='col-span-4 col-start-2 mt-10 flex h-[6rem] items-center justify-center px-5 '>
          <div className='col-span-4 col-start-2 mt-10 flex h-[6rem] items-center justify-center px-5'>
            <h1>
              <span className='text-black'>FAQ</span>
            </h1>
          </div>
        </div>
        <div className='col-span-6 col-start-2 mt-10 items-center pb-10'>
          <div className='col-span-6 col-start-2 flex justify-center px-5'>
            <Accordion open={open === 1}>
              <AccordionHeader onClick={() => handleOpen(1)}>
                Apa itu ALa Carte POS?
              </AccordionHeader>
              <AccordionBody>
                Ala carte POS" merupakan gabungan antara konsep "ala carte" yang
                telah dijelaskan sebelumnya dan POS (Point of Sale) yang merujuk
                pada sistem atau perangkat yang digunakan untuk memproses
                transaksi penjualan dan pembayaran di toko atau bisnis. Dalam
                konteks bisnis atau restoran, "ala carte POS" mengacu pada
                sistem POS yang dirancang khusus untuk mendukung operasi ala
                carte atau pilihan menu individual. Artinya, sistem POS ini
                memungkinkan pelanggan untuk memesan dan membayar makanan atau
                barang secara terpisah sesuai dengan pilihan mereka, seperti
                yang dilakukan dalam layanan ala carte.
              </AccordionBody>
            </Accordion>
          </div>
          <div className='col-span-6 col-start-2 mt-10 flex justify-center px-5'>
            <Accordion open={open === 2}>
              <AccordionHeader onClick={() => handleOpen(2)}>
                Bagaimana cara menggunakan aplikasi kasir/POS dari Ala Carte?
              </AccordionHeader>
              <AccordionBody>
                1. Unduh Aplikasi: Unduh aplikasi kasir/POS dari Ala Carte
                melalui Play Store<br></br>2. Buat Akun Pengguna dengan mengisi
                informasi lengkap<br></br>3. Aplikasi siap untuk digunakan.
                <br></br>Pastikan untuk membaca panduan pengguna aplikasi
                kasir/POS dari Ala Carte atau dari penyedia lainnya untuk
                mendapatkan panduan langkah demi langkah yang tepat dan
                memastikan Anda mengoptimalkan fungsionalitas aplikasi sesuai
                dengan kebutuhan bisnis Anda. Jika Anda memiliki pertanyaan
                lebih lanjut tentang cara menggunakan aplikasi kasir/POS dari
                Ala Carte, sebaiknya Anda menghubungi tim dukungan untuk
                mendapatkan bantuan lebih lanjut.
              </AccordionBody>
            </Accordion>
          </div>
          <div className='col-span-6 col-start-2 mt-10 flex justify-center px-5'>
            <Accordion open={open === 3}>
              <AccordionHeader onClick={() => handleOpen(3)}>
                Berapa biaya berlangganan Ala Carte POS?
              </AccordionHeader>
              <AccordionBody>
                Dengan biaya berlangganan 0 Rupiah, Anda dapat menikmati semua
                fitur dan manfaat dari layanan kami tanpa harus merasa terbebani
                oleh biaya tambahan. Kami percaya bahwa setiap bisnis atau
                individu berhak mendapatkan akses ke teknologi canggih tanpa
                harus membayar biaya berlangganan yang mahal.
              </AccordionBody>
            </Accordion>
          </div>
          <div className='col-span-6 col-start-2 mt-10 flex justify-center px-5'>
            <Accordion open={open === 4}>
              <AccordionHeader onClick={() => handleOpen(4)}>
                Bagaimana cara mendaftar Ala Carte POS?
              </AccordionHeader>
              <AccordionBody>
                Pilih Opsi Mendaftar: Pada halaman utama aplikasi atau situs
                web, Anda akan menemukan pilihan untuk mendaftar sebagai
                pengguna baru. Klik atau pilih opsi ini untuk melanjutkan proses
                pendaftaran.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default feature5;
