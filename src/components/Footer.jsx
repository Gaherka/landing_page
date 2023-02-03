import React from 'react';
import CenterMenu from './CenterMenu';

function Footer() {
    return (
        <div className=" footer flex flex-col items-center justify-start px-[3rem] bg-[#020917] h-[25rem] pt-[15rem] mt-[-8rem] relative z-[-2]">
            <CenterMenu />
            
           
            {/* detail */}
            <span className="text-[1rem] text-gray-400 px-[10rem] text-center mt-[4rem]">
                KDOS MUSIC @2023 <br />
                UNA EXPERIENCIA INOLVIDABLE
            </span>
        </div>
    )
}

export default Footer
