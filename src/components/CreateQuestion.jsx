import React from 'react'
import { NavBar } from './NavBar'

export const CreateQuestion = () => {


  return (
    <>

    <NavBar />

        <div className="createQuestionBox" id='createQuestionBox'>
            <h3>Crear pregunta</h3>
            <hr />
            <div className="questionStateBox">
                <h4>Estado</h4>
                <select name="state" id="questionState"></select>
            </div>
            <p className='enunciado'>Enunciado</p>
            <textarea name="enunciado" id="" cols="55" rows="10"></textarea>
        </div>

    </>
  )
}
