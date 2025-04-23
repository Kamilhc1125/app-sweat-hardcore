import { Heading } from "@/components/ui";
import { motion } from "framer-motion";

import GenresCard from "./GenresCard";
import { genres } from "@/constants";

const GenresList = () => {

  return (

    <motion.div
      initial={{ scale: 0.8, opacity: 0 }} 
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="justify-items-center min-h-100"
    >
      <div id="genres" className="p-10">
        <Heading title="My Favourite Genres" />
        <div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-12"
        >
          {genres.map((genre, index) => <GenresCard genre={genre} key={index} />)}
        </div>
      </div>
    </motion.div>
  )
}

export default GenresList;
