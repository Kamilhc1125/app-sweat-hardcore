export const baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D';

export const hardcoreURL = 'https://www.youtube.com/channel/UChdN4PK44AaZ7weyy1MEofQ';

export const channelId = 'UCySkyH4LcbB0sRlqJqTh_4w';

export const videoOrder = 'desc';

export const videoCount = 20;

export const socialLinks = {
  'linkedIn': 'https://www.linkedin.com/in/kamil-malaszewicz/',
  'facebook': 'https://www.facebook.com/SweatHardcore/'
};

export const navLinks = [
  {
    href: "#",
    name: "Top"
  },
  {
    href: "#photos",
    name: "photos"
  },
  {
    href: "#genres",
    name: "Genres"
  },
  {
    href: "#videos",
    name: "Videos",
  },
  {
    href: "#gear",
    name: "Gear",
  },
  {
    href: "#bands",
    name: "Bands",
  }
];

import { imgMetalcore, imgPunk, imgHardcore } from '@/assets/images';

export const genres = [
  {
    musicStyle: "Hardcore",
    icon: imgHardcore,
    description: "Hardcore is more than just music - it's a movement built on raw energy, fast tempos, and aggressive sound. Emerging from the punk scene, hardcore is about passion, unity, and standing up for what you believe in. It's loud, unapologetic, and fueled by a DIY spirit that keeps the scene alive. Whether in the pit or through the lyrics, hardcore is a way of life - real, intense, and forever underground."
  },
  {
    musicStyle: "Metalcore",
    icon: imgMetalcore,
    description: "Metalcore blends the intensity of hardcore with the technical precision of metal, creating a sound that's both brutal and melodic. Known for its heavy breakdowns, fast riffs, and dynamic shifts between screams and clean vocals, metalcore brings raw emotion and power to every track. Rooted in underground scenes, yet constantly evolving, the genre pushes boundaries while staying true to its aggressive and passionate core."
  },
  {
    musicStyle: "Punk",
    icon: imgPunk,
    description: "Punk is more than just music - it's a rebellion, a voice for the unheard, and a raw expression of energy and attitude. With fast-paced riffs, DIY ethics, and lyrics that challenge authority, punk has always been about breaking the rules and standing up for what you believe in. It's a movement fueled by passion, individuality, and the power to create change - loud, fearless, and unstoppable."
  }
];

export const gearElements = [
  {
    category: "hardware",
    items: [
      "Spector ReBop 5 DLX 40CS Black Stain Matte",
      "D'Addario EPS170-5 ProSteels 5-String Bass Light Long Scale 45-130",
      "Proel Die Hard Gold",
      "Focusrite Scarlett 2i2 3rd Gen"
    ]
  },
  {
    category: "software",
    items: [
      "Ableton Live 11 LiteAbleton Live 11 Lite",
      "Aurora DSP Mammoth",
      "HitFilm Express 12"
    ]
  },
]

export const gearDescription = [
  "A solid hardware setup is key to achieving a clean, professional sound in any home studio. From a responsive 5-string bass to reliable cables and a quality audio interface, each component plays a role in tone and clarity. With the right strings and gear, the instrument becomes a natural extension of the player, capturing every nuance of performance.",
  "On the software side, a streamlined digital audio workstation makes composing and recording smooth and intuitive. Paired with tone-shaping plugins and easy-to-use video editing tools, the setup supports both sound and visual production. This balanced gear combo gives musicians the freedom to create and share with confidence."
];

export const footerDescription = [
  "Hardcore is more than music; it's a way of life. It's about passion, unity, and standing strong for what you believe in. It's the raw energy in the pit, the loyalty to the scene, and the pride of never backing down. Hardcore isn't just a sound - it's family, resilience, and a mindset that lasts a lifetime. No trends, no compromises - Hardcore Forever."
];

import {
  imgBand01,
  imgBand02,
  imgBand03,
  imgBand04,
  imgBand05,
  imgBand06,
  imgBand07,
  imgBand08,
  imgBand09,
  imgBand10,
  imgBand11,
  imgBand12 
} from '@/assets/bands';

export const bandsDescription = [
  {
    name: "Parkway Drive",
    image: imgBand01
  },
  {
    name: "Walls of Jericho",
    image: imgBand02
  },
  {
    name: "Ignite",
    image: imgBand03
  },
  {
    name: "Shai Hulud",
    image: imgBand04
  },
  {
    name: "Suicide Silence",
    image: imgBand05
  },
  {
    name: "As I Lay Dying",
    image: imgBand06
  },
  {
    name: "North of the Northstar",
    image: imgBand07
  },
  {
    name: "Hatebreed",
    image: imgBand08
  },
  {
    name: "Slaughter to Prevail",
    image: imgBand09
  },
  {
    name: "Miss May I",
    image: imgBand10
  },
  {
    name: "Ramallah",
    image: imgBand11
  },
  {
    name: "Lionheart",
    image: imgBand12
  }
];

export const projectDescription = [
  "react js",
  "vite",
  "axios",
  "tailwind css",
  "daisy ui",
  "dotenv",
  "framer motion",
  "react icons",
  "react intersection observer",
  "react slick",
  "slick carousel"
]