import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/formaAppLogo.png'

export const NavBar = () => {

  const navigate = useNavigate();

  const handleClickForm = () => {
      navigate("/form");
  }

  const handleClickQuestions = () => {
    navigate("/");
}

  return (
    <>

        <div className="buttonsContainer">
            <img src={logo} alt="logo" className="logo" />
            <button className='questionsList' onClick={handleClickQuestions}>Listado de preguntas</button>
            <button className='createQuestion' onClick={handleClickForm}>Crear pregunta</button>
        </div>

    </>
  )
}
