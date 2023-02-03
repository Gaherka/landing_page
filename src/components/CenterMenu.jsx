import React from 'react'

function CenterMenu() {
    const liStyle = "mr-[3rem] hover:cursor-pointer"
    return (
        <div className="menu flex">
            <ul className='flex w-[100%] justify-between'>
            <li><a href="#Acercade">Acerca de</a></li>
            <li><a href="#Ventajas">Ventajas</a></li>
            <li><a href="#Planes">Planes</a></li>
            <li><a href="#Desarolladoras">Desarrolladoras</a></li>
            </ul>
        </div>
        
    )
}

export default CenterMenu