import React, { useState, useEffect, createContext } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorBG, setCursorBG] = useState('default');
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Lower stiffness and damping for a smoother, more fluid motion
  const springConfig = { damping: 30, stiffness: 100 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  const cursorVariants = {
    default: {
      backgroundColor: '#0e1112',
      width: 32,
      height: 32,
    },
    text: {
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
      width: 150,
      height: 150,
    },
  };

  const mouseEnterHandler = () => setCursorBG('text');
  const mouseLeaveHandler = () => setCursorBG('default');

  return (
    <CursorContext.Provider value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full"
        style={{
          x,
          y,
          width: cursorVariants[cursorBG].width,
          height: cursorVariants[cursorBG].height,
          backgroundColor: cursorVariants[cursorBG].backgroundColor,
          mixBlendMode: cursorVariants[cursorBG].mixBlendMode,
        }}
      />
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
