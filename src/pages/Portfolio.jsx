import React, {useContext} from 'react';
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {transition1} from '../transitions'
import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return (
    <motion.section 
      initial={{opacity: 0, y: '100%'}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: '100%'}}
      transition={transition1}
    className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center lg:items-center justify-start lg:justify-start text-center lg:text-left py-8 lg:pt-36">
          
          {/* Left text section */}
          <motion.div 
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{opacity: 0, y: '-80%'}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: '-80%'}}
            transition={transition1}
          className="flex lg:mr-8 lg:pt-12 flex-col justify-center items-center lg:items-start ml-30 py-16">
            <h1 className="h1 text-8xl">Portfolio</h1>
            <p className="mb-4 max-w-md text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. <b>Excitationem, 
              veritatis.</b> Veritatis illum aut, reprehenderit <br />
              sed dolorem dolore.
            </p>
            <p className="mb-6 max-w-md text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia.
            </p>
            <Link to={'/contact'} className="btn bg-black text-white px-6 py-2 rounded-lg">
              Hire me
            </Link>
          </motion.div>

          {/* Right image grid */}
          <div 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="grid grid-cols-2 gap-1 lg:gap-1 lg:justify-between">
            <div className="max-w-[250px] h-[187px] lg:max-w-[320px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover w-full h-full hover:scale-110 transition-all duration-500" src={Image1} alt="Portfolio item 1" />
            </div>
            <div className="max-w-[250px] h-[187px] lg:max-w-[320px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover w-full h-full hover:scale-110 transition-all duration-500" src={Image2} alt="Portfolio item 2" />
            </div>
            <div className="max-w-[250px] h-[187px] lg:max-w-[320px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover w-full h-full hover:scale-110 transition-all duration-500" src={Image3} alt="Portfolio item 3" />
            </div>
            <div className="max-w-[250px] h-[187px] lg:max-w-[320px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover w-full h-full hover:scale-110 transition-all duration-500" src={Image4} alt="Portfolio item 4" />
            </div>
          </div>
          
        </div>
      </div>
    </motion.section>
  );
}

export default Portfolio;
