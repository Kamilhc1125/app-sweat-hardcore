import { useRef } from 'react';
import useOnlineStatus from '@/hooks/useOnlineStatus';
import { Alert } from '../ui';

const Hero = () => {

  const isOnline = useOnlineStatus();
  const iframeRef = useRef(null);
  const videoId = "gH8yThyG7X8";

  return (

    <>
      {!isOnline ? (
        <Alert />
      ) : (
        <div className="xl:h-screen md:h-[700px] h-[350px] flex items-center">
          <iframe
            ref={iframeRef}
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Hero"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  )
}

export default Hero;