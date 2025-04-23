import { useEffect } from 'react';
import { Heading, Alert, Loader } from '../ui';
import VideoCard from './VideoCard';
import { videoCount, videoOrder, channelId, baseUrl } from '@/constants';
import useAxios from '@/hooks/useAxios';

import { imgSmoke } from '@/assets/gifs';

const VideoList = () => {

  const { response, error, loading, fetchData } = useAxios();

  const apiKey = import.meta.env.VITE_RSS_API_KEY;
  const apiUrl = `${baseUrl}${channelId}&api_key=${apiKey}&order_dir=${videoOrder}&count=${videoCount}`;

  useEffect(() => {
    fetchData({ url: apiUrl, method: "GET"});
  }, []);

  if (error) return <Alert />;

  return (
    <div
      id="videos" 
      className="bg-center p-10"
      style={{ backgroundImage: `url(${imgSmoke})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
    >
      <Heading title={`All Videos`} />
      {loading && (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      )}
      {!loading && (
        <div className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-12 justify-items-center min-h-200`}>
          {response.items.map((video, index) => (
            <VideoCard
              key={video.guid}
              video={video}
              lastVideo={index == 0 ? true : false}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default VideoList;
