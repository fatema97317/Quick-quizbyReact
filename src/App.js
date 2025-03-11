import './App.css';
import {useState} from "react"
import listOfQuiz from "./QuizContent";
function App() {
  
  const [currentQuestion , setQuestion] = useState(0)
  const [score , setScore] = useState(0)
  const [Finish , setFinish] = useState(false)

  function handleAnswer(selected){
  if(listOfQuiz[currentQuestion].correct === selected){
    setScore(score+1)
  }
  if(currentQuestion +1 < listOfQuiz.length){
    setQuestion(currentQuestion + 1)
  }else{
    setFinish(true)
  }
  }
  return (
    <div className="App">
      <h2>Brainy Quiz</h2>

      {!Finish ?(
        <div>
        <div className='questionDiv'> {listOfQuiz[currentQuestion].Quiz} </div>
    
    <div className='answers'>
      {listOfQuiz[currentQuestion].options.map((option , index)=>
       <button key={index} onClick={()=> handleAnswer(option)}> {option}</button>
         
      )}
    
     
    </div>
    </div>)
        : 
    ( <span className='score'> your score is {score} from {listOfQuiz.length} questions</span> )
     
     }
    
    
    </div>
  );
}

export default App;
