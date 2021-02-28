import React, { useState, useEffect } from 'react';
import Results from './Results';
import Avatar from './sub-components/Avatar';

export default function QuizPage(props) {
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [questions, setQuestions] = useState(props.questions);

  const currentQuestion = Math.floor(Math.random() * props.questions.length);

  const user = props.avatars.find(avatar => avatar.name === props.selectedAvatar);
  const npcs = props.avatars.filter(avatar => avatar.name !== user.name);

  const handleUserChoice = (index) => {
    if (index === props.questions[currentQuestion].correctAnswerIndex) {
      setTimeout(() => {
        props.setUserScore(props.userScore + 1000);
        props.setSelectedAnswer(index);
        setQuestionsAnswered(questionsAnswered + 1);
        // setQuestions(questions.filter((question => console.log(question))));
        console.log(questions);
      }, 1500);
    } else {
      setTimeout(() => {
        props.setSelectedAnswer(index);
        setQuestionsAnswered(questionsAnswered + 1);
        // setQuestions(questions.filter((question => console.log(question))));
        console.log(questions);
      }, 1500);
    }
  }

  useEffect(() => {
    if (questionsAnswered === 5) {
      return props.results;
    }
  }, [props.results, questionsAnswered]);

  return (
    <div className="quiz-box">
      <div className="quiz-avatar-container">
        <div className="avatar-box">
          <Avatar src={user.src} alt={user.name} />
          <span>{props.username}: {props.userScore}</span>
        </div>
        {npcs.map((npc) => {
          return (
            <div className="avatar-box" key={npc.name}>
              <Avatar src={npc.src} alt={npc.name} />
              <span>{npc.name}</span>
            </div>
          );
        })}
      </div>

      <div id="question" className="question">{questions[currentQuestion].question}</div>
      <div className="answers">
        {questions[currentQuestion].answers.map((answer, index) => {
          return (
            <label key={answer} className="answer">
              <input name="answer" type="radio" onClick={() => {
                handleUserChoice(index);
              }}
              />
              <div>{answer}</div>
            </label>
          )
        })}
      </div>
    </div>
  )
}