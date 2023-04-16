import React from 'react';

type Props = { name: string; image: string };

const TechStackCard = (props: Props) => {
  const { name, image } = props;

  return (
    <div className='card'>
      <img  src={image} alt="" />
      <h4>{name}</h4>
    </div>
  );
};

export default TechStackCard;
