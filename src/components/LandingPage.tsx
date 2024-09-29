import { useEffect, useState } from "react"
import { useScramble } from "use-scramble";
import { motion } from "framer-motion"
import ImageMe from '../images/IMG_0298-photoaidcom-cropped.jpg'

function LandingPage() {
    const [jobtitle , Setjobtitle ] = useState("Développeur - Full Stack")

    useEffect(() => {
        const word = ["Développeur Full-Stack", "Développeur Front-end", "Développeur Back-End"]
        const intervale = setInterval(() => {
            Setjobtitle(word[Math.floor(Math.random()*word.length)])
            
        }, 1800);

        return () => clearInterval(intervale)
    })

    const { ref } = useScramble({ 
        text: jobtitle 
      });
    


  return (
<div className="pt-44 flex items-center justify-around text-white">
    <div className="gap-10">
        <h1 className="text-5xl leading-none">ABOUBAKAR <br />BAMBA</h1>
        <h1 className="text-2xl"> Etudiant à la recherche d'une alternance en tant que <span className="text-pink-800"> <h1  ref={ref}/></span> </h1>
    </div>
    <motion.div
      animate={{
        y: [0, -20, 0], 
      }}
      transition={{
        duration: 2,
        repeat: Infinity, 
        ease: "easeInOut",
      }}
    >
      <img src={ImageMe} alt="Image flottante" className="h-96 rounded-full" />
    </motion.div>
</div>

  )
}

export default LandingPage