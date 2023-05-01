import React,{ useState, } from "react";
import "./Question.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [corrects, setCorrects] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [ids, setIds] = useState();

  const handleSelect = (i) => {
    
    if (selected === i && selected === correct){
      return "select"
    }
    else if (selected === i && selected !== correct){
      return "wrong"}
      else if (i === correct){
       return "select"
      };
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) {
      setCorrects(corrects+1)
      setScore(score + 1)
    }else{
      setWrong(wrong+1)
    }
  };
  
  const handleNext = () => {
    if (currQues ==questions.length-1) {
      alert('THanks you sir')
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else {
      alert('Select answer')
    };
  };

  return (
    <div className="">
<div className="question">
<h1>Question {currQues + 1} of {questions.length}</h1>
      <p>{questions[currQues].category}</p>
      <div className="">
        {Array(3).fill(undefined).map((_,index)=>{
          const {difficulty} = questions[currQues]
     return <FontAwesomeIcon icon={faStar} color={difficulty=='hard'?'':difficulty=='medium'&&index<2?'':difficulty=='easy'&&index==0?'':'gray'}/>
})}
      </div>

</div>
      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected &&  handleSelect(i)}`}
                key={i}
                onClick={() =>( handleCheck(i),setIds(i))}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
<h1>    {ids === correct?'Correct!':selected === ids && selected !== correct&&'Sorry!'}
  </h1>
        <div className="controls">
          <button
          className="singleOption"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            Next Question
          </button>
        </div>
      </div>
      <div >
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
       <h1>Score {score}%
        </h1> 
        <h1>{Math.floor(score / questions.length *100)}%</h1>
        </div>
        <div className="" style={{display:'flex',height:'30px'}}>
									<div style={{height:'100%',width:`${currQues / questions.length * 100}%`,backgroundColor: 'black'}}></div>
									<div style={{height:'30px',width:`${Math.floor(corrects / wrong )}%`,backgroundColor: 'gray'}}></div>
									<div style={{height:'30px',width:`${Math.floor(score / questions.length *100)}%`,backgroundColor: '#80808054'}}></div>
								</div>
      </div>
    </div>
  );
};

export default Question;
