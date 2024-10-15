import  Logo  from '../images/ab-high-resolution-logo-white-transparent.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




function Header() {
  useEffect(() => {
    AOS.init({
      duration: 700, 
    });
  }, []);

  return (
    <div className="flex justify-start items-center p-4 sticky" data-aos="fade-down">
      <div> 
        <img src={Logo} alt="" className="h-10" />
      </div>
      <div className='ml-auto text-3xl flex gap-2 text-white'>
        <a href="https://www.linkedin.com/in/aboubakar-bamba-5b2279274/"><FaLinkedin /></a>
        <a href="https://github.com/Aboubakar2004?tab=repositories"><FaGithub /></a>
      </div>
    </div>
  );
}

export default Header;

