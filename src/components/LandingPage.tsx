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
    <div className="lg:h-screen h-screen  flex flex-col lg:flex-row justify-around  items-center text-white text-center overflow-hidden">
      <div className="flex flex-col text-left" data-aos="fade-right">
        <h1 className="text-4xl lg:text-5xl leading-none">ABOUBAKAR <br /> BAMBA</h1>
        <h2 className="text-xl lg:text-2xl mt-4 flex gap-2">
          Étudiant aspirant à devenir  
          <span className="text-cool-grey"><h1 ref={ref} /></span>
        </h2>
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
    className="mt-8 lg:mt-0 lg:ml-auto"
  >
    <img 
      src={ImageMe} 
      alt="Image flottante" 
      className="h-64 w-64 lg:h-96 lg:w-96 rounded-full object-cover shadow-2xl" 
      data-aos="zoom-in" 
    />
    </motion.div>
</div>

  );
}

export default LandingPage;
