import { species } from "../data/species";

const ButtonsList = () => {
  const speciesList = species.map((bird) => (
    <button
      className="bird-btn"
      key={bird.id}
      onClick={() => console.log(bird.speciesCode)}
    >
      <img className="bird-btn-img" src={bird.image} alt={bird.commonName} />
      <label htmlFor="bird">{bird.commonName}</label>
    </button>
  ));

  return <div>{speciesList}</div>;
};

export default ButtonsList;
