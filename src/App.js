import React, { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import question from './questions.json'
import Question from './components/Question/Question';
function App () {

  const [options, setOptions] = useState();
  const [questions, setQuestions] = useState(question);
  const [currQues, setCurrQues] = useState(0);
  const [score, setScore] = useState(0);


  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className='App'>
{questions&&(
        <>
              <div className="">
              <div className="" style={{height:'30px'}}>

									<div style={{height:'100%',width:`${currQues / questions.length * 100}%`,backgroundColor: 'gray'}}></div>
								</div>
              </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      )}
    </div>
  )
}

export default App
