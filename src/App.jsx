
import { CreateQuestion } from './components/CreateQuestion'
import { NavBar } from './components/NavBar'
import { QuestionList } from './components/QuestionList'

export const App = () => {

  return (
    <>

      <NavBar/>
      <QuestionList/>
      <CreateQuestion />
    </>
  )
}

