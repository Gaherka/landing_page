import React from "react";
import Feature from "./Feature";

function Desarrolladoras(){
return(
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[40rem] pt-[13rem] mt-[-10rem] relative z-[-1] rounded-b-[3rem]">
            {/* icon */ }
            <img src={require("../img/Path 318.png")} alt="" className="w-[3rem]" />
            {/* heading */}
            <div className="headline mt-7 flex flex-col items-center text-[2rem]">
                <span>Una aplicación que puede cambiar tu día</span>
                <span>
                <b></b>
                </span>
            </div>
            {/* features  */}
            <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
                <Feature icon="Group 2" title="Utilizala donde tu prefieras" />
                <Feature icon="music icon" title="Facil de utilizar" />
            </div>
        </div>
)
}


export default Desarrolladoras