import '../css/Biblioteca.css'

import ComingSoon from '../img/coming-soon.svg'

export function CarrerasCortas(){

    return(
        <>
            <div className='biblioteca-container'>
              <img src={ComingSoon} alt="comming" className='img-coming'/>
              <h1>Proximamente...</h1>
            </div>
        </>
    )
}