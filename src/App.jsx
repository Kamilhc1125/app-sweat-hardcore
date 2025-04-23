import { VideoList } from '@/components/videos';
import { Footer, Header, Modal, Preloader } from '@/components/ui';
import { Hero, Gear, Photos, Bands } from '@/components/main';
import { GenresList } from '@/components/genres';
import { Test, Test2, Debug } from '@/components/test';
import { useEffect, useState } from 'react';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const loadingTime = 1500;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);
  })

  return (
    <div className='min-h-screen items-center m-0 p-0'>
      {isLoading ? <Preloader loadingTime={loadingTime} /> : (
        <>
          <Header />
          <Hero />
          <Photos />
          <GenresList />
          <VideoList />
          <Gear />
          <Bands />
          <Modal />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App;
