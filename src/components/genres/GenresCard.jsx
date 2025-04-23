import { imgFire04 } from "@/assets/gifs";

const GenresCard = ({ genre }) => {

  const { musicStyle, icon, description } = genre;

  return (

    <div 
      className="w-96 md:w-60 lg:w-80 h-80 md:h-60 lg:h-80 relative flex items-center justify-center bg-neutral rounded-xl overflow-hidden group shadow-lg font-bangers sh-border-animated "
    >
      <div 
        className="relative flex items-center justify-center w-full"
      >
        <div className="relative z-20">
          <img
            src={icon}
            alt="Icon"
            className="w-70 h-70 z-20"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-lg z-10 ">
          <img src={imgFire04} className="w-full" />
        </div> 
      </div>
      <div className="absolute flex flex-col items-center justify-center bg-accent w-80 h-80 bottom-0 left-0 right-0 bg-opacity-80 text-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-30">
        <h2 className="text-2xl font-bold uppercase text-center">{musicStyle}</h2>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  )
}

export default GenresCard;