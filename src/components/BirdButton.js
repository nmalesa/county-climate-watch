import "./BirdButton";
import species from "../data/species.json";
import bluebird from "../assets/images/eabl.jpg";

const BirdButton = () => {
  return (
    <div>
      <button>
        <img
          className="birdButton"
          src={bluebird}
          alt={species[0].commonName}
        />
        <p>{species[0].commonName}</p>
      </button>
    </div>
  );
};

export default BirdButton;
