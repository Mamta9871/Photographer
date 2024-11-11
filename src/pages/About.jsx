import React, {useContext} from "react";
import WomanImg from "../img/About/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const About = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%'}}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className="section"
    >
      <div 
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="container mx-auto h-full relative">
        {/* text & image wrap */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <div className="flex-1 max-w-[200px] lg:max-w-[400px] order-2 lg:order-none overflow-hidden">
            <img
              src={WomanImg}
              alt="About Me"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* text */}
          <motion.div 
          initial={{opacity: 0, y: '-80%'}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: '-80%'}}
          transition={transition1}          
          className="flex-1 pt-36 pb-12 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">About Me</h1>
            <p className="mb-4 max-w-md text-gray-700 leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <b>Voluptate architecto</b> aspernatur magnam. Vero sint ab alias
              error tempora quia adipisci.
            </p>
            <p className="mb-8 max-w-md text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              sequi soluta ducimus, consequatur.
            </p>
            <Link
              to={"/portfolio"}
              className="btn bg-black text-white px-6 py-2 rounded-lg"
            >
              View My Work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
