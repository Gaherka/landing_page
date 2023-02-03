import React, { useState } from 'react'
import MusicPlayer from './MusicPlayer'
import { motion } from 'framer-motion'
import VisibilitySensor from 'react-visibility-sensor'

function Search() {
    const [elementIsVisible, setElementIsVisible] = useState(false);
    const bg = {
        true: {
            left: "-44rem",
        },
        false: {
            left: "-50rem",
        },
    };
    const redimg = {
        true: {
            left: "18rem",
        },
        false: {
            left: "16rem",
        },
    };
    const musicimg = {
        true: {
            left: "2rem",
        },
        false: {
            left: "6rem",
        },
    };

    return (
        <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
            {/* left side */}
            <div className="left flex-1">
                <motion.img
                    variants={bg}
                    animate={`${elementIsVisible}`}
                    transition={{
                        duration: 1,
                        type: "ease-out",
                    }}
                    src={require("../img/backgraphics.png")}
                    alt=""
                    className="absolute top-[22rem] left-[-47rem]"
                />
                <motion.img
                    src={require("../img/d1.png")}
                    alt=""
                    className="w-[16rem] top-[26rem] absolute"
                />{" "}
                <motion.img
                    src={require("../img/d2.png")}
                    alt=""
                    className="w-[9rem] absolute top-[32.7rem] left-[7rem]"
                />{" "}
                <motion.img
                    variants={redimg}
                    animate={`${elementIsVisible}`}
                    transition={{
                        duration: 1.2,
                        type: "ease-out",
                    }}
                    src={require("../img/d3.png")}
                    alt=""
                    className="w-[9rem] top-[33rem] left-[17rem] absolute"
                />
                <motion.img
                    variants={musicimg}
                    animate={`${elementIsVisible}`}
                    transition={{
                        duration: 1,
                        type: "ease-out",
                    }}
                    src={require("../img/d4.png")}
                    alt=""
                    className="w-[17rem] top-[50rem] left-[2rem] absolute"
                />
            </div>
            {/* right side */}
            <div className="right flex items-start flex-col  flex-1 h-[100%] pt-[9rem] justify-end">
               
                {/* paragraph */}
                <div className="detail flex flex-col mt-5 text-4xl justify-end">
                    <span>Tu mejor</span>
                    <span>
                        <b>OPCION EN MUSICA</b>
                    </span>
                    <span className="text-md mt-3 text-[#4D586A] justify-end">
                        Crea tus propias playing, <br /> descubriendo lo mejor de tus artistas <br /> 
                    </span>
                </div>
                {/* Music Player */}
                <VisibilitySensor onChange={(isVisible) => setElementIsVisible(isVisible)}>
                    <MusicPlayer />
                </VisibilitySensor>
            </div>
        </div>
    );
}

export default Search