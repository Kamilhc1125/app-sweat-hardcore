import React from 'react';
import { gearElements, gearDescription } from '@/constants';
import { imgSparks01 } from '@/assets/gifs';

const Gear = () => {
  return (
  
    <div 
      id="gear" 
      className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 justify-items-center min-h-50 w-full lg:w-4/5 m-auto p-12"
      style={{ backgroundImage: `url(${imgSparks01})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className='w-full text-wrap p-6'>
        <h2 className="font-bangers mb-6 border-b-[5px] border-accent inline-block">Gear</h2>
        <h1 className="font-hardcore text-4xl">What I use</h1>
        {gearDescription.map((description, index) => (
          <p key={index} className="font-bangers mt-6">{description}</p>
        ))}
      </div>
      <div className='w-full text-wrap p-6 flex flex-col'>
        {gearElements.map((gear, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl font-bold font-hardcore text-white mb-2 border-b-[5px] border-accent inline-block">0{index + 1} {gear.category}</h2>
            <ul className="text-white space-y-1 border-r-[2px] border-accent">
              {gear.items.map((item, index) => (
                <li key={index} className="font-bangers flex items-end gap-2">
                  <span className="text-accent mt-1">★</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gear;
