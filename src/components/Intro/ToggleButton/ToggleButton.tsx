import React from 'react';
import './ToggleButton.scss';

type Props = { toggleTheme: () => void };

const ToggleButton = ({ toggleTheme }: Props) => {
  return (
    <label className={`switch `}>
      <input type="checkbox" onClick={toggleTheme} />
      <span className="slider round" />
    </label>
  );
};

export default ToggleButton;
