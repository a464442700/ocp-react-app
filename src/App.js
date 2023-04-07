import React, {Component} from 'react';
import initQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import logo from './svg/oracle.png';
import './App.css';
function test(){
	if (typeof window !== 'undefined') {
  console.log('浏览器端')
  // 👉️ 可以使用 localStorage 
} else {
  console.log('服务器端r')
  // 👉️ 不可以使用 localStorage
}
const person = { firstName: 'Robin', lastName: 'Wieruch' };
localStorage.setItem('user', JSON.stringify(person));
const stringifiedPerson = localStorage.getItem('user');
const personAsObjectAgain = JSON.parse(stringifiedPerson);
console.log(personAsObjectAgain);

	
}


let quizQuestions=[];

class App extends Component {
    constructor(props) {
        super(props);
      // console.log('quizQuestions',quizQuestions);
        this.state = {
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            answer: '',
            answersCount: {},
            result: '',
		    rightAnswers:[]
        };
			//test();//测试能否使用本地存储以及本地存储用法
//quizQuestions=initQuestions;
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }
	/*
	读取源数据：1,2,3,4,5,6,7,8,9,10

	if本地存储为空，
		将源数据加载到本地存储
	else
		从本地存储取数，存入数组
		数组切片取出5题1,2,3,4,5,填充进qustion数组
		剩余数据写回本地存储
*/
    initQuestion(){
		//console.log('本地存储',JSON.parse(localStorage.getItem('is-open')))
	//console.log('本地存储字符串',localStorage.getItem('question')=='[]');
		if (!JSON.parse(localStorage.getItem('question')) || localStorage.getItem('question')=='[]')
		{
       // console.log("本地存储为空");
		localStorage.setItem('question', JSON.stringify(initQuestions));
		}
//	console.log('本地存储详细内容',JSON.parse(localStorage.getItem('question')));
let arr = JSON.parse(localStorage.getItem('question'))
		for (let i=0;i<2;i++)
			{
			let r=Math.floor(Math.random()*arr.length);
			quizQuestions=quizQuestions.concat(arr.splice(r,1));

			}
	    	localStorage.setItem('question', JSON.stringify(arr));
		//   console.log("本地存储不为空");
		
	
		
	}
    
    componentDidMount() {
		this.initQuestion();	
        const shuffledAnswerOptions = quizQuestions.map(question =>
            this.shuffleArray(question.answers)
        );//返回选项随机后的数组
        this.setState({
            question: quizQuestions[0].question,//初始化question
            answerOptions: shuffledAnswerOptions[0],//返回随机排列后的选项
			rightAnswers:quizQuestions[0].rightAnswers
        });
    }


//这个函数的作用就是随机排列选项
    shuffleArray(array) {
        var currentIndex = array.length,
            temporaryValue,
            randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);//返回0-6的任意一个数
            currentIndex -= 1;//总数-1，比如答案3个，循环3次就到0了，结束循环

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    handleAnswerSelected(event) {
		
        this.setUserAnswer(event.currentTarget.value);
      // console.log('下一个问题',this.state.questionId,quizQuestions.length )
        if (this.state.questionId < quizQuestions.length) {
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
        }
    }

    setUserAnswer(answer) {
        this.setState((state, props) => ({
            answersCount: {
                ...state.answersCount,
                [answer]: (state.answersCount[answer] || 0) + 1
            },
            answer: answer
        }));
    }
  //完成回答一题则重新刷新状态
    setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;

        this.setState({
            counter: counter,
            questionId: questionId,
            question: quizQuestions[counter].question,
            answerOptions: quizQuestions[counter].answers,
			rightAnswer:quizQuestions[counter].rightAnswers,
            answer: ''
        });
    }

    getResults() {
        const answersCount = this.state.answersCount;
        const answersCountKeys = Object.keys(answersCount);
        const answersCountValues = answersCountKeys.map(key => answersCount[key]);
        const maxAnswerCount = Math.max.apply(null, answersCountValues);

        return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
    }

    setResults(result) {
        if (result.length === 1) {
            this.setState({result: result[0]});
        } else {
            this.setState({result: 'Undetermined'});
        }
    }

    renderQuiz() {
        return (
            <Quiz
                answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                questionId={this.state.questionId}
                question={this.state.question}
                questionTotal={quizQuestions.length}
                onAnswerSelected={this.handleAnswerSelected}
				rightAnswer={this.state.rightAnswers}
            />
        );
    }

    renderResult() {
        return <Result quizResult={this.state.result}/>;
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Oracle 19c 083 试题 </h2>
                </div>
                {this.state.result ? this.renderResult() : this.renderQuiz()}{/*初始化显示问题*/}
            </div>
        );
    }
}

export default App;
