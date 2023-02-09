import React from 'react'
import { NavBar } from './NavBar'

export const QuestionList = () => {
  return (
    <>

    <NavBar />

        <div className="questionsContainer">
            <h5>Listado de preguntas</h5>
            <div className="questionsTable">
                <div className="titles">
                    <p>ID</p>
                    <p>Enunciado</p>
                    <p>Estado</p>
                    <p>Accion</p>
                </div>
                <ul className="list">
                    
                </ul>
            </div>
        </div>

    </>
  )
}
