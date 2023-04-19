type Props = { name: string; image: string };

const TechStackCard = ({ name, image }: Props) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <h4>{name}</h4>
    </div>
  );
};

export default TechStackCard;
