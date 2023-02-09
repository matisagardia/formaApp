import React from 'react'
import { useStore } from 'react-redux'
import { NavBar } from './NavBar'

export const QuestionList = () => {

  const {id, enunciado, estado} = useStore();

  console.log(id, enunciado, estado)

  return (
    <>

    <NavBar />

        <div className="questionsContainer">
            <h5>Listado de preguntas</h5>
            <div className="questionsTable">
                <div className="titles">
                    <p>{id}</p>
                    <p>{enunciado}</p>
                    <p>{estado}</p>
                    <p></p>
                </div>
                <ul className="list">
                    
                </ul>
            </div>
        </div>

    </>
  )
}
