import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <AnimatePresence>
      {show && (
        <motion.button
        className="fixed cursor-pointer bottom-4 right-4 z-20 bg-cyan-600 text-black hover:shadow-[0_0_15px_#22d3ee] hover:bg-cyan-400 p-3 rounded-full shadow-lg  transition-colors"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        >
          <ArrowUp className='h-5 w-5' />
        </motion.button>
      )}
    </AnimatePresence>
  )
}