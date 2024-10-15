import ProjectImage from "../images/ab-high-resolution-logo-white-transparent.png"
import PokeBallImage from "../images/Poké_Ball_icon.svg"
import StreamingImage from "../images/movie-catalogue-high-resolution-logo-transparent.png"
import Image from "../images/waterver-high-resolution-logo-transparent.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function Project() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);


  
  return (
    <div className="flex flex-col justify-center align-middle items-center text-white " data-aos="fade-right" data-aos-offset="400">
      <div className="text-4xl text-white">
        <h1>Mes Projets</h1>
      </div>
        <div className=" grid grid-cols-4 gap-10 p-10">
          <a href="">
            <div className="bg-ultra-violet shadow-xl  p-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cool-grey hover:text-white duration-150 rounded-xl leading-10">
              <h1 className="text-2xl">01</h1>
                <p>PortFolio</p>
                <img src={ProjectImage} alt="" className="object-contain h-96 w-96" />
                <h1 className="text-2xl">PortFolio</h1>
                <p>React</p>
            </div>
          </a>
          <a href="https://pok-dex-kappa.vercel.app/?vercelToolbarCode=L8Zp8u9cczufMZN">
            <div className="bg-ultra-violet p-10 shadow-xl   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cool-grey hover:text-white duration-150 rounded-xl leading-10">
              <h1 className="text-2xl">02</h1>
                <p>Lorem Ispum</p>
                <img src={PokeBallImage} alt="" className="object-contain  h-96 w-96" />
                <h1 className="text-2xl">Nom du Projet</h1>
                <p>React , Tailwid</p>
            </div>  
          </a>   
          <a href="https://movie-catalogue-six.vercel.app/">
            <div className="bg-ultra-violet p-10 transition shadow-xl   ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cool-grey hover:text-white duration-150 rounded-xl leading-10">
              <h1 className="text-2xl">03</h1>
                <p>Lorem Ispum</p>
                <img src={StreamingImage} alt="" className="object-contain h-96 w-96" />
                <h1 className="text-2xl">Movie Catalogue</h1>
                <p>React , Tailwid</p>
            </div>
          </a> 
          <a href="https://helpful-youtiao-204b71.netlify.app/">
            <div className="bg-ultra-violet p-10 transition shadow-xl   ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cool-grey hover:text-white duration-150 rounded-xl leading-10">
              <h1 className="text-2xl">04</h1>
                <p>Site de Vitrine</p>
                <img src={Image} alt="" className="object-contain h-96 w-96 "   />
                <h1 className="text-2xl">TRVL</h1>
                <p>React</p>
            </div>
          </a>
      </div>
    </div>
  )
}

export default Project