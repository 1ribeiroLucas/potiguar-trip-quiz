import React, { useState, useEffect } from 'react';

import Avatar from './sub-components/Avatar';

export default function Results(props) {
  const [firstPlace, setFirstPlace] = useState(false);
  const scoreOne = (Math.floor(Math.random() * 5)) * 1000;
  const scoreTwo = (Math.floor(Math.random() * 5)) * 1000;
  const scoreThree = (Math.floor(Math.random() * 5)) * 1000;
  const npcScore = [scoreOne, scoreTwo, scoreThree];

  const user = props.avatars.find(avatar => avatar.name === props.selectedAvatar);
  const npcs = props.avatars.filter(avatar => avatar.name !== user.name);

  useEffect(() => {
    window.onload = () => {
      const highestScore = [props.userScore, ...npcScore].reduce((a, b) => Math.max(a, b));
      highestScore === props.userScore ? setFirstPlace(true) : setFirstPlace(false);
    }

    window.addEventListener('click', props.reset);
    return () => {
      window.removeEventListener('click', props.reset);
    }
  });

  return (
    <div className="avatar-selection-box">
      <h1>O jogo terminou!</h1>
      {firstPlace ? <h2>Parabéns, {props.username}!</h2> : <h2>Que pena, não foi dessa vez...</h2>}
      <div className="avatar-container">
        <div className="image-box">
          <Avatar src={user.src} alt={user.name} />
          <span>{props.username}: {props.userScore}</span>
        </div>
        {npcs.map((npc, index) => {
          return (
            <div className="image-box" key={npc.name}>
              <Avatar src={npc.src} alt={npc.name} />
              <span>{npc.name}: {npcScore[index]}</span>
            </div>
          );
        })}

        {/* <button type="button" onClick={props.reset}></button> */}
      </div>
    </div>
  );
}
