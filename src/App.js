import React, { useState } from 'react';

import StartPage from './components/StartPage';
import AvatarSelectionPage from './components/AvatarSelectionPage';
import QuizPage from './components/QuizPage';
import Results from './components/Results';
import './App.scss';

import questions from './questions';
import avatars from './avatars';

function App() {

  const [avatarSelection, setAvatarSelection] = useState(false);
  const [quizPage, setQuizPage] = useState(false);
  const [startPage, setStartPage] = useState(true);
  const [resultsPage, setResultsPage] = useState(false);

  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [userScore, setUserScore] = useState(0);

  // HANDLERS
  const handleStart = () => {
    setAvatarSelection(!avatarSelection);
    setStartPage(!startPage);
  }
  const handleQuiz = () => {
    setQuizPage(!quizPage);
    setAvatarSelection(!avatarSelection);
  }
  const handleInput = (username) => {
    setUsername(username);
  }
  const handleAvatar = (avatar) => {
    setSelectedAvatar(avatar);
  }

  const handleResult = () => {
    setResultsPage(!resultsPage);
    setQuizPage(!quizPage);
  }
  const handleReset = () => {
    setStartPage(true);
    setAvatarSelection(false);
    setQuizPage(false);
    setResultsPage(false);
    setUserScore(0);
  }

  return (
    <main>
      {startPage && <StartPage start={handleStart} />}
      {avatarSelection && <AvatarSelectionPage avatars={avatars} setAvatar={handleAvatar} selectedAvatar={selectedAvatar} setUsername={handleInput} username={username} quiz={handleQuiz} />}
      {quizPage && <QuizPage
        username={username.length === 0 ? setUsername('Sem Nome') : username}
        selectedAvatar={selectedAvatar}
        setSelectedAnswer={setSelectedAnswer}
        questions={questions}
        avatars={avatars}
        userScore={userScore}
        setUserScore={setUserScore}
        results={handleResult}
      />}
      {resultsPage && <Results
        username={username.length === 0 ? setUsername('Sem Nome') : username}
        selectedAvatar={selectedAvatar}
        avatars={avatars}
        userScore={userScore}
        reset={handleReset}
      />}
    </main>
  )
}

export default App;
