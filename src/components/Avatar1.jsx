import React from 'react'
import  desa1  from '../assets/img/damaris.svg';

function Avatar1() {
    return (
        <div className='avatar'>
                <img src={desa1} alt="" title="Facil de utilizar" className="w-[6rem]" />
                <p className='avartar-text justify-center text-center'>
                   Damaris de <br />
                   Quezada
                </p>
        </div>
                     
            )
}

export default Avatar1