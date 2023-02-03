import React from "react"


function Card() {
    return (
        <div id="Planes" className="container  d-flex justify-center ">
            <div className="row col-md-4">
                    <div className='card '>
                    <div className='card-body'>
                        <h3>Planes</h3>
                            <h4 className='card-title'>KDOS PREMIUM</h4>
                            <p className='card-text'>
                                Selecciona y reproduce cualquier canción sin anuncios.
                               
                                Escucha contenidos en todos tus dispositivos y disfruta de sonido de alta fidelidad.
                            </p>
                            <br></br>
                            <a href="#!" className=" d-flex btn btn-outline-light text-sm justify-center text-center">
                                Pruebalo GRATIS
                            </a>
                            
                            <p className='card-text text-center'> <br />
                            1 mes gratis luego US$6.99/mes.
                                <br></br>
                                Sin compromiso, puedes cancelar cuando quieras.
                            </p>
                        </div>
                    </div>
            </div>
            <div className="row col-md-4">
                    <div className='card'>
                    <div className='card-body'>
                            <h4 className='card-title'>KDOS FAMILY</h4>
                            <p className='card-text'>
                            Música para todos.
                                <br></br>
                                Obtén 6 cuentas individuales, todas con los beneficios, incluyendo sonido de alta fidelidad.
                                <br></br>
                                Escucha simultáneamente en varios dispositivos. 
                            </p><br></br>
                            <a href="#!" className=" d-flex btn btn-outline-light text-sm justify-center text-center">
                                Pruebalo GRATIS
                            </a>
                            
                            <p className='card-text text-center'> <br />
                            1 mes gratis luego US$11.99/mes.
                                <br></br>
                                Sin compromiso, puedes cancelar cuando quieras.
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )

}

export default Card