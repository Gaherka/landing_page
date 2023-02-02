import React from 'react'
import CenterMenu from './CenterMenu'
import  logo  from '../assets/img/logo (2).svg'

function Header() {
    const buttonStyle = "border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]"
    return (
        <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
            {/* Logo */}
            <img src={logo} alt="" className='logo w-[60px] h-[60px]'/>
            {/* Side Menu */ }
            <CenterMenu />
            {/* Buttons */ }
            <div className="buttons flex">
                <button className={`mr-[35px] hover:bg-[#232A4E] ` + buttonStyle}>Inicio</button>
                <button className={buttonStyle + ` bg-[#232A4E]`}>Registrate</button>
            </div>
        </div>
    )
}

export default Header