import React from 'react';
import PropTypes from 'prop-types';
import {useState} from "react";


export default function AnswerOption(props) {
  
  const isRightAnswer =(answerMap,rightList)=>{
	let  answerList=Array.from(answerMap).filter(
  
    ([a,b],i)=>{  
        if (b==true) return a;
    }
    ).map(
        ([a,b])=>{return a}
        );
    
console.log('处理后的数据：',answerList)  ;  
return answerList.sort().toString()===rightList.sort().toString()

	  
  };
  
   const  [checkedState, setCheckedState]  =props.checkedStates;//checkedState是map
console.log('AnswerOption props',props)
console.log('AnswerOption checkedState',checkedState)
  const handleOnChange =()=>{
  if ( checkedState.has(props.answerType) ){
	setCheckedState(()=>	checkedState.set(props.answerType,  !checkedState.get(props.answerType)  ));
			console.log('AnswerOptioncheckedState',checkedState)

  } else{
	setCheckedState(()=>	checkedState.set(props.answerType,true));
		console.log('AnswerOptioncheckedState',checkedState)
	};
	
	if (isRightAnswer(checkedState,props.rightAnswer))
	{
		props.onAnswerSelected();
	}
	
	
	
}
;


    return (

        <li className="answerOption">
            <input
                type="checkbox"
                className="radioCustomButton"
                name="radioGroup"
				checked={checkedState.get(props.answerType)} //{props.answerType === props.answer}//这个属性设置复选框勾选
                id={props.answerType}
                value={props.answerType}
                disabled={props.answer}
				 onChange={() => handleOnChange()}
            />
            <label className="radioCustomLabel" htmlFor={props.answerType}>
                {props.answerContent}
            </label>
			
        </li>
    );

}
/*https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
https://github.com/mitchgavan/react-multi-choice-quiz

*/
