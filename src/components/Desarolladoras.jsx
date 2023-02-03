import React from "react";
import Avatar1 from "./Avatar1";
import Avatar2 from "./Avatar2";
import Avatar3 from "./Avatar3";
import Avatar4 from "./Avatar4";
import Avatar5 from "./Avatar5";

function Desarrolladoras(){
return(
    <div className="desarrolladoras flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[40rem] pt-[13rem] mt-[-10rem] relative z-[-1] rounded-b-[3rem]">
            {/* icon */ }
            <img src={require("../img/Path 318.png")} alt="" className="w-[3rem]" />
            {/* heading */}
            <div className="headline mt-7 flex flex-col items-center text-[2rem]">
                <span>Desarrolladoras</span>
                <span>
                <b></b>
                </span>
            </div>
            {/* features  */}
            <div className="desarrolladorasAvatar flex items-center justify-around mt-[6rem] w-[100%]">
                <Avatar1/>
                <Avatar2 icon="dani-bruni" title="Facil de utilizar" />
                <Avatar3 icon="karla-hernandez" title="Facil de utilizar" />
                <Avatar4 icon="lizzie-angel" title="Facil de utilizar" />
                <Avatar5 icon="music icon" title="Busca tus canciones preferidas" />
            </div>
        </div>
)
}


export default Desarrolladoras