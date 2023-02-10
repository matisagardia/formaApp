import React from 'react'
import { useSelector } from 'react-redux'
import { NavBar } from './NavBar'

export const QuestionList = () => {

  const {questions} = useSelector( state => state.question );

  console.log(questions)
  
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
                  {questions.map((item, index) => (
                    <li key={index} className='listItem'><p>{item.id}</p> <p className='itemText'>{item.enunciado}</p> <p>{item.estado}</p> <button className='eraseQuestion'>Borrar</button></li>
                  ))}
                </ul>
            </div>
        </div>

    </>
  )
}
