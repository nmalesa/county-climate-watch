import React from 'react';
import species from '../data/species.json';

const SpeciesSelection = () => {
    return (
        < >
            <h1>Species Selection</h1>
            <img src={require("../assets/images/eabl.jpg")} alt={species[0].commonName} />
        </>
    );
};

export default SpeciesSelection;