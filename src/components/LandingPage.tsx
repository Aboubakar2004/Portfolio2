import { useEffect, useState } from "react";
import { useScramble } from "use-scramble";
import { motion } from "framer-motion";
import ImageMe from '../images/IMG_0298-photoaidcom-cropped.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function LandingPage() {
  const [jobtitle, Setjobtitle] = useState("Développeur - Full Stack");

  useEffect(() => {
    const word = ["Développeur Full-Stack", "Développeur Front-end", "Développeur Back-End"];
    const intervale = setInterval(() => {
      Setjobtitle(word[Math.floor(Math.random() * word.length)]);
    }, 1800);

    return () => clearInterval(intervale);
  }, []);

  const { ref } = useScramble({
    text: jobtitle,
  });

  useEffect(() => {
    AOS.init({
      duration: 700, 
    });
  }, []);

  return (
    <div className="h-screen flex justify-start items-center text-white text-center">
      <div className="" data-aos="fade-right">
        <h1 className="text-5xl text-left leading-none">ABOUBAKAR <br /> BAMBA</h1>
        <h1 className="text-2xl mt-4 text-left flex gap-2">
          Étudiant aspirant à devenir  
          <span className="text-cool-grey text-left"><h1 ref={ref} /></span>
        </h1>
      </div>
      <motion.div
        animate={{
          y: [0, -50, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="ml-auto"
      >
        <img src={ImageMe} alt="Image flottante" className="h-96 w-96 rounded-full object-cover shadow-2xl" data-aos="zoom-in" />
      </motion.div>
    </div>
  );
}

export default LandingPage;


