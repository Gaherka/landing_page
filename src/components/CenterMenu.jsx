import React from 'react'

function CenterMenu() {
    const liStyle = "mr-[3rem] hover:cursor-pointer"
    return (
        <div className="menu flex">
            <ul className='flex w-[100%] justify-between'>
                <li className={liStyle}>Acerca de</li>
                <li className={liStyle}>Ventajas</li>
                <li className={liStyle}>Planes</li>
                <li className={liStyle}>Preguntas frecuentes</li>
                <li className={liStyle}>Desarrolladoras</li>
            </ul>
        </div>
    )
}

export default CenterMenu