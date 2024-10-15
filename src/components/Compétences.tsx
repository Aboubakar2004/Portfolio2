import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { useEffect } from "react";

function Competence() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <div className='h-screen  items-center text-center'>
      <h1 className='ml-5 text-white text-4xl mb-40 ' data-aos='fade-down' data-aos-offset="500">Mes Stacks</h1>
      <div className='flex justify-between text-white ml-14'>
        <div className='flex flex-col items-center' data-aos='fade-right'>
          <h1 className='text-3xl mb-2'>React</h1>
          <FaReact className='animate-spin text-4xl mx-auto text-blue-400' style={{animationDuration: "10s"}} />
          <p className='text-xl text-center mt-4'>
            Je travaille principalement avec le Framework <br /> 
            React pour le front-end.
          </p>
        </div>
        <div className='flex flex-col items-center' data-aos='fade-down'>
          <h1 className='text-3xl mb-2'>Tailwind</h1>
          <RiTailwindCssFill className='text-4xl mx-auto text-blue-400' />
          <p className='text-xl text-center mt-4'>
            J'utilise également TailwindCSS pour allier productivité<br /> 
            et efficacité dans la partie design des sites.
          </p>
        </div>
        <div className='flex flex-col items-center' data-aos='fade-left'>
          <h1 className='text-3xl mb-2'>Next.Js</h1>
          <RiNextjsFill className='text-4xl mx-auto text-black' />
          <p className='text-xl text-center mt-4'>
            Et enfin j'utilise Next.js pour la partie front-end <br /> 
            mais aussi pour la partie  back-end <br /> 
          </p> 
        </div>
      </div>
    </div>
  );
}

export default Competence;
