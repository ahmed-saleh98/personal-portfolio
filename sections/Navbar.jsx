import { useEffect, useRef, useState } from 'react';
import DarkTheme from '@/components/DarkMode';
import { navVariants } from '@/utils/motion';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navRef = useRef();

  useEffect(() => {
    const navBar = document.querySelector('.navbar');
    const navIcon = document.querySelector('.nav-icon');
    document.onclick = (e) => {
      e.target !== navBar && e.target !== navIcon ? setIsNavOpen(false) : null;
    };
  }, []);

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="z-50 fixed w-full backdrop-blur-sm"
    >
      <div className="absolute inset-0 gradient-01 -z-10" />
      <nav ref={navRef} className="container px-3 flex justify-between py-3">
        <h2 className="nav-logo font-bold text-lg text-[--color-primary]">
          Ahmed Saleh
        </h2>
        <DarkTheme />
        <div className="relative navbar">
          <div
            className="nav-icon h-7 p-1 space-y-1.5 space flex flex-col 
            items-end md:hidden cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8  bg-[--color-primary]"></span>
            <span
              className={`block h-0.5 ${
                isNavOpen ? 'w-8' : 'w-4'
              } bg-[--color-primary] transition-all`}
            ></span>
            <span className="block h-0.5 w-8  bg-[--color-primary]"></span>
          </div>
          <div className="mobile-menu absolute -right-2 top-8">
            <ul
              className={`${
                isNavOpen ? 'h-[180px] w-[150px] scale-100' : 'scale-0 w-0 h-0'
              } flex md:hidden flex-col text-center justify-center  rounded-xl
            text-[#fff] overflow-hidden bg-[--main-color] 
              transition-all duration-500`}
            >
              <li>
                <a className="mobile-menu-link" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="mobile-menu-link border-t" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="mobile-menu-link border-t" href="#work">
                  Work
                </a>
              </li>
              <li>
                <a className="mobile-menu-link border-t" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <ul className="md:flex hidden gap-2">
            <li>
              <a className="desktop-menu-link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="desktop-menu-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="desktop-menu-link" href="#work">
                Work
              </a>
            </li>
            <li>
              <a className="desktop-menu-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </motion.div>
  );
};
export default Navbar;
