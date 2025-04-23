import React from 'react';
import { motion } from "framer-motion";
import { Heading } from '@/components/ui';
import {
  imgGallery00,
  imgGallery01,
  imgGallery02,
  imgGallery03,
  imgGallery04
} from '@/assets/images';

const Photos = () => {

  const images = [imgGallery01, imgGallery02, imgGallery03, imgGallery04];

  return (
    <div className="w-4/5 mx-auto" id="photos">
      <Heading title="Photos" />
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 lg:w-1/2">
          {images.map((image, index) => (
            <motion.div
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 1}}
              transition={{ delay: 0.15 * index, duration: 0.5, ease: "easeOut" }}
              className="justify-items-center min-h-100"
              key={index}
            >
              <div className="overflow-hidden" key={index}>
                <img src={image} alt={`Image ${index}`} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="relative">
          <img src={imgGallery00} alt="Main Photo" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Photos;
