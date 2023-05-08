import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import {useState} from "react";

function Quiz(props) {
	
	/*answerOptions是数组*/
  console.log('props.answerOptions',props.answerOptions)
	   const [checkedState, setCheckedState] = useState(
	   new Map
    );
	
	const showAnswer =(event)=>{
		  event.stopPropagation();
		//console.log(props.rightAnswer)
		//setCheckedState(()=>	new Map());
		//引用类型的值修改不会触发页面重新渲染
		//setCheckedState(()=>{
		//	"A":true
		//});
		const map=new Map()
		
		for (var i=0;i<props.rightAnswer.length;i++)
{  // console.log('props.rightAnswer[i]',props.rightAnswer[i])
  //  setCheckedState(()=>	checkedState.set(props.rightAnswer[i],true));
  map.set(props.rightAnswer[i],true)
}
		console.log('点击答案显示字典',map)
		setCheckedState(()=>	map);
	//props.onAnswerSelected(event)
	}
	const nextQuestion=(event)=>{
		setCheckedState(()=>	new Map());
		props.onAnswerSelected(event)
	}
	
  function renderAnswerOptions(key) {
	//  console.log('key',key);
	 console.log('props.rightAnswer',props.rightAnswer);
	   
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
		checkedStates={[checkedState, setCheckedState]}
		rightAnswer={props.rightAnswer}
      />
    );
  }

  return (
    <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div key={props.questionId}>
        <QuestionCount counter={props.questionId} total={props.questionTotal} />
        <Question content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}{/*map方法产生列表*/}
        </ul>
      </div>
	  <div class="table">
	  <div class="button" onClick={(event) => showAnswer(event)} >show answer</div>
	  	  <div  class="button" onClick={(event) => nextQuestion(event)} >next question</div>
  </div>
    </CSSTransitionGroup>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
