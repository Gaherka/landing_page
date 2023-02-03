import React from 'react';

function CenterMenu() {
    const liStyle = "mr-[3rem] hover:cursor-pointer"
    return (
        <div className="menu flex">
            <ul className='flex w-[100%] justify-between'>
                <li className={liStyle}> <a href="#Acerca">Acerca de</a> </li>
                <li className={liStyle}> <a href="#Caracteristicas">Caracteristicas</a> </li>
                <li className={liStyle}> <a href="#Planes">Planes</a></li>
                <li><a href='#Desarrolladoras'>Desarrolladoras</a></li>
            </ul>
        </div>
        
    )
}

export default CenterMenu