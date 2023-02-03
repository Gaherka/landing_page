import React from 'react'
import  desa2  from '../assets/img/dani-bruni.svg';

function Avatar2() {
    return (  
        <div className='avatar'>
                <img src={desa2} alt="" className="w-[6rem]" /> 
                <p className='avartar-text justify-center text-center'>
                  Daniela Bruni
                </p>
        </div>    
                 
    )
}

export default Avatar2