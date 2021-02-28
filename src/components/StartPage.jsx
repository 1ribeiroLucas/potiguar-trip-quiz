import React, { useEffect } from 'react';
import map from '../assets/imgs/mapa.png';
import logos from '../assets/imgs/logos.png';

export default function StartPage(props) {
  useEffect(() => {
    window.addEventListener('click', props.start);
    return () => {
      window.removeEventListener('click', props.start);
    }
  }, [props.start]);
  return (
    <>
      <div className="title-box">
        <span>Potiguar</span>
        <span>Trip</span>
      </div>
      <img className="map-image" src={map} alt="Mapa" />
      <span className="logos"><img src={logos} alt={logos} /></span>
    </>
  )
}
