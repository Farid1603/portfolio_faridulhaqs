import logo from "../assets/Faridlogo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {motion} from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y:-100}}
    transition={{duration:0.5}}
    className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/faridulhaqs/"><FaLinkedinIn/></a>
            <a href="https://github.com/Farid1603"><FaGithub /></a>
            <a href="https://www.instagram.com/farid_ul_haq._/"><FaInstagram /></a>
            <a href ="https://wa.me/9025993039?text="><FaWhatsapp /></a>

        </div>
    </motion.nav>

  )
}

export default Navbar;