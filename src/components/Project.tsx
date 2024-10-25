import ProjectImage from "../images/ab-high-resolution-logo-white-transparent.png";
import AboubakarRImage from "../images/logo (1).png";
import StreamingImage from "../images/movie-catalogue-high-resolution-logo-transparent.png";
import Image from "../images/waterver-high-resolution-logo-transparent.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Project() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center text-white"
      data-aos="fade-right"
      data-aos-offset="400"
    >
      <div className="text-4xl text-white mb-8">
        <h1>Mes Projets</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5">
        <a href="">
          <div className="bg-ultra-violet shadow-xl p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cool-grey hover:text-white duration-150 rounded-xl leading-10">
            <h1 className="text-2xl">01</h1>
            <p>PortFolio</p>
            <img
              src={ProjectImage}
              alt="PortFolio"
              className="object-contain h-48 w-48 md:h-64 md:w-64 lg:h-96 lg:w-96"
            />
            <h1 className="text-2xl">PortFolio</h1>
            <p>React</p>
          </div>
        </a>
        <a href="https://aboubakar-virtual-r.vercel.app/">
          <div className="bg-ultra-violet p-5 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cool-grey hover:text-white duration-150 rounded-xl leading-10">
            <h1 className="text-2xl">02</h1>
            <p>Lorem Ipsum</p>
            <img
              src={AboubakarRImage}
              alt="Poké Ball"
              className="object-contain h-48 w-48 md:h-64 md:w-64 lg:h-96 lg:w-96"
            />
            <h1 className="text-2xl">Aboubakar VirtualR</h1>
            <p>React, Tailwind</p>
          </div>
        </a>
        <a href="https://movie-catalogue-six.vercel.app/">
          <div className="bg-ultra-violet p-5 transition shadow-xl ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cool-grey hover:text-white duration-150 rounded-xl leading-10">
            <h1 className="text-2xl">03</h1>
            <p>Lorem Ipsum</p>
            <img
              src={StreamingImage}
              alt="Movie Catalogue"
              className="object-contain h-48 w-48 md:h-64 md:w-64 lg:h-96 lg:w-96"
            />
            <h1 className="text-2xl">Movie Catalogue</h1>
            <p>React, Tailwind</p>
          </div>
        </a>
        <a href="https://helpful-youtiao-204b71.netlify.app/">
          <div className="bg-ultra-violet p-5 transition shadow-xl ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cool-grey hover:text-white duration-150 rounded-xl leading-10">
            <h1 className="text-2xl">04</h1>
            <p>Site de Vitrine</p>
            <img
              src={Image}
              alt="TRVL"
              className="object-contain h-48 w-48 md:h-64 md:w-64 lg:h-96 lg:w-96"
            />
            <h1 className="text-2xl">TRVL</h1>
            <p>React</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Project;
