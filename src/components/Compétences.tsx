import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { useEffect } from "react";

function Competence() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <div className='h-screen text-center flex flex-col justify-center'>
      <h1 className='ml-5 text-white text-4xl mb-10' data-aos='fade-down' data-aos-offset="500">Mes Stacks</h1>
      <div className='flex flex-col md:flex-row justify-around items-center text-white w-full'>
        <div className='flex flex-col items-center mb-10 md:mb-0' data-aos='fade-right'>
          <h1 className='text-3xl mb-2'>React</h1>
          <FaReact className='animate-spin text-4xl mx-auto text-blue-400' style={{ animationDuration: "10s" }} />
          <p className='text-xl text-center mt-4'>
            Je travaille principalement avec le Framework <br /> 
            React pour le front-end.
          </p>
        </div>
        <div className='flex flex-col items-center mb-10 md:mb-0' data-aos='fade-down'>
          <h1 className='text-3xl mb-2'>Tailwind</h1>
          <RiTailwindCssFill className='text-4xl mx-auto text-blue-400' />
          <p className='text-xl text-center mt-4'>
            J'utilise également TailwindCSS pour allier productivité<br /> 
            et efficacité dans la partie design des sites.
          </p>
        </div>
        <div className='flex flex-col items-center' data-aos='fade-left'>
          <h1 className='text-3xl mb-2'>Node.js</h1>
          <FaNodeJs className='text-4xl mx-auto text-black' />
          <p className='text-xl text-center mt-4'>
            Et enfin j'utilise Node.js principalement pour<br /> 
            la partie back-end.
          </p> 
        </div>
      </div>
    </div>
  );
}

export default Competence;
