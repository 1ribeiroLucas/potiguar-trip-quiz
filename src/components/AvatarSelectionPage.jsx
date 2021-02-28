import React from 'react';

import Avatar from './sub-components/Avatar'

export default function AvatarSelectionPage(props) {
  return (
    <div className="avatar-selection-box">
      <input type="text" placeholder="Usuário" value={props.username} onChange={({ target }) => props.setUsername(target.value)} />
      <h1>Escolha seu avatar!</h1>

      <div className="avatar-container">
        {props.avatars.map((avatar) => {
          return (
            <label key={avatar.name} className="image-box">
              <input type="radio" name="avatar" value={avatar.name} onClick={() => props.setAvatar(avatar.name)} />
              <Avatar src={avatar.src} alt={avatar.name} />
            </label>
          )
        })}
      </div>

      <button type="button" onClick={props.quiz}>Escolher</button>
    </div>
  )
}