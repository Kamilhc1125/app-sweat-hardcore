import { handleLink, trimTitle } from "@/utils";

const VideoCard = ({ video, lastVideo }) => {

  const { title, guid, link, pubDate } = video;

  return (

    <div
      className="card bg-neutral w-96 sm:w-96 md:w-80 lg:w-full shadow-2xl hover:opacity-85 cursor-pointer transition-transform duration-300 hover:scale-110 sh-border-animated"
      onClick={() => handleLink(link)}
      // style={{ boxShadow: '2px 2px 2px gray' }}
    >
      <figure>
        <img
          src={`https://i4.ytimg.com/vi/${guid.split(':')[2]}/mqdefault.jpg`}
          alt="video"
          className="w-full" 
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-2xl font-bangers flex justify-between">
          <span className="font-bangers">{trimTitle(title)}</span>
          {lastVideo && <div className="badge badge-accent">NEW</div>}
        </h3>
        <p className="font-bangers">Date of publication: {pubDate}</p>
      </div>
    </div>
  )
}

export default VideoCard;
