import React from 'react'

function CenterMenu() {
    const liStyle = "mr-[3rem] hover:cursor-pointer"
    return (
        <div className="menu flex">
            <ul className='flex w-[100%] justify-between'>
                <li className={liStyle}>
                    <a href='#Hero'>
                    </a>Acerca de</li>
                <li className={liStyle}>Ventajas</li>
                <li className={liStyle}>Planes</li>
                <li className={liStyle}>Desarrolladoras</li>
            </ul>

            <div id="Acercade" className={liStyle}></div>
        </div>
    )
}

export default CenterMenu