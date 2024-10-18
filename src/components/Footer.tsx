import Image from '../images/IMG_0298-photoaidcom-cropped.jpg';
import { FaPhone } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
import { CgMail } from "react-icons/cg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-3xl mb-10" data-aos='fade-right' data-aos-offset='300'>
        Ce serait un plaisir de collaborer avec vous !
      </h1>
      <div className='flex flex-col gap-5 w-full max-w-md' data-aos="fade-left" data-aos-offset='300'>
        <div className='flex justify-between items-center bg-ultra-violet p-6 rounded-lg shadow-xl gap-6 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
          <h1 className='flex items-center gap-4'>
              <FaPhone />
              +33 6 17 73 56 79
          </h1>
          <img src={Image} alt="Contact Icon" className='w-12' />
        </div>
        <a href="https://www.linkedin.com/in/aboubakar-bamba-5b2279274/?originalSubdomain=fr">
          <div className='flex justify-between items-center bg-ultra-violet p-6 rounded-lg shadow-xl gap-6 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
            <h1 className='flex gap-4 items-center'>
                <FaLink />
                Linkedin
            </h1>
            <img src={Image} alt="LinkedIn Icon" className='w-12' />
          </div>
        </a>
        <a href="mailto:aboubakarpro19@gmail.com">
          <div className='flex justify-between items-center bg-ultra-violet p-6 rounded-lg shadow-xl gap-6 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
            <h1 className='flex gap-4 items-center'>
                <CgMail />
                Gmail
            </h1>
            <img src={Image} alt="Email Icon" className='w-12' />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Footer;
