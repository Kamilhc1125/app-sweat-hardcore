import { useState, useEffect, useRef } from 'react';
import { imgLogo } from '@/assets/images';
import { intro } from '@/assets/audio';

const Preloader = ({ loadingTime }) => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 10;
        return next >= 100 ? 100 : next;
      });
    }, loadingTime / 20);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <img src={imgLogo} alt="logo" className='w-96'/>
      <p className='font-hardcore text-2xl'>Loading <span className="loading loading-dots loading-lg mt-4"></span></p>
      <progress
        className="progress w-96 transition-all duration-300 mt-10"
        value={progress}
        max="100"
      />
    </div>
  )
}

export default Preloader;
