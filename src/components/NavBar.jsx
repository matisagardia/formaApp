import React from 'react'
import logo from '../assets/formaAppLogo.png'

export const NavBar = () => {
  return (
    <>

        <div className="buttonsContainer">
            <img src={logo} alt="logo" className="logo" />
            <button className='questionsList'>Listado de preguntas</button>
            <button className='createQuestion'>Crear pregunta</button>
        </div>

    </>
  )
}
