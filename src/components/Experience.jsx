import React from 'react'
import Feature from './Feature'

function Experience() {
    return (
        <div id="Ventajas" className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[40rem] pt-[13rem] mt-[-10rem] relative z-[2] rounded-b-[3rem]">
            {/* icon */ }
            <img src={require("../img/Path 318.png")} alt="" className="w-[3rem]" />
            {/* heading */}
            <div className="headline mt-7 flex flex-col items-center text-[2rem]">
                <span>Una aplicación que puede cambiar tu día</span>
                <h2>Ventajas</h2>
                <span>
                <b></b>
                </span>
            </div>
            {/* features  */}
            <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
                <Feature icon="Group 2" title="Utilizala donde tu prefieras" />
                <Feature icon="music icon" title="Facil de utilizar" />
                <Feature icon="Group 4" title="Encuentra a tus artistas favoritos" />
                <Feature icon="music icon" title="Busca tus canciones preferidas" />
            </div>
        </div>
    )
}

export default Experience