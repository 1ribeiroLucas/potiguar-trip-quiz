import Context from '../Context';

import AUTA_DE_SOUZA from '../assets/imgs/auta_de_souza.png';
import CLARA_CAMARAO from '../assets/imgs/clara_camarao.png';
import MESTRE_SEVERINO from '../assets/imgs/mestre_severino.png'
import NISIA_FLORESTA from '../assets/imgs/nisia_floresta.png'

const questions = [
  {
    question: 'Questão 1',
    answers: [
      'Resposta 1',
      'Resposta 2',
      'Resposta 3',
      'Resposta 4',
    ],
    correctAnswerIndex: 3,
  },
  {
    question: 'Questão 2',
    answers: [
      'Resposta 5',
      'Resposta 6',
      'Resposta 7',
      'Resposta 8',
    ],
    correctAnswerIndex: 2,
  },
  {
    question: 'Questão 3',
    answers: [
      'Resposta 9',
      'Resposta 10',
      'Resposta 11',
      'Resposta 12',
    ],
    correctAnswerIndex: 1,
  },
  {
    question: 'Questão 4',
    answers: [
      'Resposta 13',
      'Resposta 14',
      'Resposta 15',
      'Resposta 16',
    ],
    correctAnswerIndex: 0,
  },
  {
    question: 'Questão 5',
    answers: [
      'Resposta 17',
      'Resposta 18',
      'Resposta 19',
      'Resposta 20',
    ],
    correctAnswerIndex: 1,
  },
  {
    question: 'Questão 6',
    answers: [
      'Resposta 21',
      'Resposta 22',
      'Resposta 23',
      'Resposta 24',
    ],
    correctAnswerIndex: 2,
  },
  {
    question: 'Questão 7',
    answers: [
      'Resposta 25',
      'Resposta 26',
      'Resposta 27',
      'Resposta 28',
    ],
    correctAnswerIndex: 3,
  },
  {
    question: 'Questão 8',
    answers: [
      'Resposta 29',
      'Resposta 30',
      'Resposta 31',
      'Resposta 32',
    ],
    correctAnswerIndex: 2,
  },
  {
    question: 'Questão 9',
    answers: [
      'Resposta 33',
      'Resposta 34',
      'Resposta 35',
      'Resposta 36',
    ],
    correctAnswerIndex: 1,
  },
  {
    question: 'Questão 10',
    answers: [
      'Resposta 37',
      'Resposta 38',
      'Resposta 39',
      'Resposta 40',
    ],
    correctAnswerIndex: 0,
  },
];

const images = {
  avatars: [
    {
      name: 'Auta de Souza',
      src: AUTA_DE_SOUZA,
    },
    {
      name: 'Clara Camarão',
      src: CLARA_CAMARAO,
    },
    {
      name: 'Mestre Severino',
      src: MESTRE_SEVERINO,
    },
    {
      name: 'Nísia Floresta',
      src: NISIA_FLORESTA,
    },
  ],
}


function Provider(props) {
  const globalState = {
    questions,
    images,
    randomQuestion: Math.floor(Math.random() * questions.length),
    username: '' || 'Sem Nome',
    selectedAnswer: '',
    selectedAvatar: '',
  }

  return (
    <Context.Provider value={globalState}>
      {props.children}
    </Context.Provider>
  )
}

export default Provider;