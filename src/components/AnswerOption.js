import React from 'react';
import PropTypes from 'prop-types';

export default function AnswerOption(props) {
    console.log('props',props);
   console.log('props.checkedStates',props.checkedStates);
   let  [checkedState, setCheckedState]  =props.checkedStates;
    return (

        <li className="answerOption">
            <input
                type="checkbox"
                className="radioCustomButton"
                name="radioGroup"
				checked="true" //{props.answerType === props.answer}//这个属性设置复选框勾选
                id={props.answerType}
                value={props.answerType}
                disabled={props.answer}
                onChange={props.onAnswerSelected}
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
