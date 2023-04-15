import '../styles/Header.scss';
import React from 'react';
import headerPictureJpg from '../assets/header-picture.jpg';
import vinylSvg from '../assets/vinyl.svg';
import tonearm from '../assets/tonearm.svg';

type Props = {};

const Turntable = (props: Props) => {
  return (
    <div className="container">
      <img src={vinylSvg} className="vinyl" />
      <img src={tonearm} className="tonearm" />
    </div>
  );
};

export default Turntable;
