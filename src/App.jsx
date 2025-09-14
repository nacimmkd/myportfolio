import './App.css'
import Header from './Components/Header/Header'
import Landing from './Layouts/Landing/Landing'
import QuestionPanel from './Layouts/QuestionPanel/QuestionPanel'
import { useState } from 'react'

function App() {

  const [isImgOpen , setIsImgOpen] = useState(false);
 
  return (
    <div className="app_container">
      <div className="page_container">
        <Header className={isImgOpen ? "image_open" : ""}/> 
        <div className="main">
          <Landing isImageOpen={isImgOpen} onImageClick={setIsImgOpen}/>
          <QuestionPanel className={isImgOpen ? "image_open" : ""}/>
        </div>  
      </div>
    </div>
  )
}

export default App
