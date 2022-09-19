import { species } from "../data/species";

const ButtonsList = () => {
  const speciesList = species.map((bird) => (
    <button key={bird.id}>
      <img className="birdButton" src={bird.image} alt={bird.commonName} />
      <p>{bird.commonName}</p>
    </button>
  ));

  return <div>{speciesList}</div>;
};

export default ButtonsList;
