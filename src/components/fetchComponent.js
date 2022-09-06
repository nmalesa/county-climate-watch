import React, { useState, useCallback, useEffect } from 'react';

const URL = 'https://api.ebird.org/v2/data/obs/US-TX/recent/easblu';

const FetchComponent = () => {
    const [birds, setBirds] = useState('');

    const handleFetchBirds = useCallback(async () => {
        const response = await fetch(URL, {
            headers: {
                'X-eBirdApiToken': 'PLACEHOLDER',
            }
        });

        if (response.ok) {
            const birds = response.json();
            setBirds(birds);
        }
    }, []);

    useEffect(() => {
        handleFetchBirds();
    }, []);

    console.log('Bird: ', birds);

    return (
        <div>
            Hello, world!
        </div>
    );
};

export default FetchComponent;