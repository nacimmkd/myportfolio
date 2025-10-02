import './App.css'
import Header from './Components/Header/Header'
import Landing from './Layouts/Landing/Landing'
import Answer from './Layouts/Answer/Answer'
import QuestionPanel from './Layouts/QuestionPanel/QuestionPanel'
import { useState } from 'react'

function App() {

  const [isImgOpen , setIsImgOpen] = useState(false);
  const [question , setQuestion] = useState();
 
  return (
    <div className="app_container">
      <div className="page_container">
        <Header className={isImgOpen ? "image_open" : ""} inChat={question}/> 
        <div className="main">
          {!question ? <Landing isImageOpen={isImgOpen} onImageClick={setIsImgOpen}/>
          : <Answer question={question}/>}
          <QuestionPanel className={isImgOpen ? "image_open" : ""} setQuestion={setQuestion} inChat={question}/>
        </div>  
      </div>
    </div>
  )
}

export default App
