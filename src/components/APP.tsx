import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../images/pexels-luis-gomes-166706-546819-modified.png';

function APP() {
  useEffect(() => {
    AOS.init({
      duration: 700, 
    });
  }, []);

  return (
    <div className='h-screen flex justify-between align-middle items-center'>
      <motion.div 
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-2/5"
      >
        <img 
          src={image} 
          alt="Programming Image" 
          className='shadow-2xl rounded-full w-4/5'  
          data-aos="zoom-in"
        />
      </motion.div>
      <div className='text-white' data-aos="fade-left">
        <h1 className='text-4xl mb-4'>Qui suis-je ?</h1>
        <p className='text-xl'>
          Je m'appelle Aboubakar Bamba, 19 ans, étudiant en Bachelor <br />
          Développement Web à HETIC Montreuil. <br />
          Actuellement à la recherche d'une alternance en tant que développeur <br />
          full stack, je souhaite appliquer mes compétences en <br />
          front-end et back-end au sein d'une entreprise dynamique.
        </p>
      </div>
    </div>
  );
}

export default APP;
