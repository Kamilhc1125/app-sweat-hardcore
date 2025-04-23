import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Heading from "./Heading";
import { hardcoreURL, footerDescription } from "@/constants";
import { imgHardcoreWorldwide } from '@/assets/images';
import { imgMosh } from "@/assets/gifs";

const Footer = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
      className="rounded-lg shadow-lg"
    >
      <footer
        className="footer footer-horizontal footer-center bg-base-200 text-white rounded p-10"
        style={{ backgroundImage: `url(${imgMosh})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div>
          <Heading title="Hardcore Forever" color="text-white" arrow={false} />
          <p className="text-center w-3/5 font-bangers">
            {footerDescription}
          </p>
        </div>
        <nav>
          <div className="grid grid-flow-col gap-4 ">
            <a href={hardcoreURL} target="_blank" className="sh-hover-transition">
              <img src={imgHardcoreWorldwide} className="filter brightness-0 invert w-16" />
            </a>
          </div>
        </nav>
        <aside>
          <p className="font-bangers">Copyright © {new Date().getFullYear()} - Kamil Małaszewicz - All right reserved</p>
        </aside>
        <button className="btn btn-outline font-bangers" onClick={() => document.getElementById('modal-info').showModal()}>Project Info</button>
      </footer>
    </motion.div>
  )
}

export default Footer;