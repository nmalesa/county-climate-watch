import React from 'react';
import species from 'data/species.json';
import styles from './SpeciesSelection.css';

// const speciesImages = species.map((bird) => {
//     <ul>
//         <img src={require(bird.image)} alt={bird.commonName} style={styles.img} />
//     </ul>
// });

const SpeciesSelection = () => {
    return (
        < >
            <h1>Species Selection</h1>
            <div>
                <img src={require('assets/images/eabl.jpg')} alt={species[0].commonName} style={styles.image} />
                <img src={species[0].image} />
            </div>
        </>
    );
};

export default SpeciesSelection;