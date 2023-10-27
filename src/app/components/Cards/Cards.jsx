'use client';

import { motion } from "framer-motion";
import Image from 'next/image';

export const CardWithDecorativeImage = () => {
    const skillsImage = [
        "/assets/images/html.png",
        "/assets/images/ai.png",
        "/assets/images/xd.png",
        "/assets/images/css.png",
        "/assets/images/nextjs.png",
        "/assets/images/tailwind.png",
        "/assets/images/js.png",
        "/assets/images/reactjs.png",
        "/assets/images/nodejs.png",
        "/assets/images/woocommerce.png",
        "/assets/images/mongodb.png",
        "/assets/images/firebase.png",
    ];

    const leftInitial = {
        initial: {
          scale: 0,
          opacity: 0,
        },
        animate: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1,
          },
        },
    };
  
    return (
        <>
            <div className="columns-4 mt-6">
                {skillsImage.map((img, index) => (
                    <motion.div
                    key={index}
                    className="flex-initial w-100 h-auto"
                    initial="initial"
                    animate="animate"
                    variants={leftInitial}
                    whileHover={{ scale: 1.05 }}
                    >
                    <a className="flex" href="#">
                        <div className="p-4 container-image bg-white mb-4">
                        <Image
                            width={100}
                            height={100}
                            alt=""
                            className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out img-skill"
                            src={img}
                        />
                        </div>
                    </a>
                    </motion.div>
                ))}
            </div>
        </>
    )
}


export default CardWithDecorativeImage;
