import { species } from "../data/species";

const ButtonsList = () => {
  const speciesList = species.map((bird) => (
    <button className="bird-btn" key={bird.id}>
      <img className="bird-btn-img" src={bird.image} alt={bird.commonName} />
      <p>{bird.commonName}</p>
    </button>
  ));

  return <div>{speciesList}</div>;
};

export default ButtonsList;
