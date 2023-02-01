import React from 'react'
import Card from './Card';

function Planes() {
    return (
        <div className="flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[48rem] pt-[18rem] mt-[-10rem] relative z-[0] rounded-b-[5rem]">
            {/* tild icon or path icon */}
            <img src={require("../img/Path 318.png")} alt="" className="w-[5rem]" />
            {/* heading */}


            <div className="headline mt-7 flex flex-col items-center text-[2rem]">
                <span>Disfruta de lo mejores planes de musica</span>
                <span>
                    <b>Aplica Ahora!</b>
                </span>
            </div>
            
           <Card/>


        </div>


    );
}

export default Planes