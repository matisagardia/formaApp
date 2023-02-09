import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateQuestion } from '../components/CreateQuestion'
import { QuestionList } from '../components/QuestionList'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={ <QuestionList /> } />
        <Route path='/form' element={ <CreateQuestion />} />
    </Routes>
  )
}
