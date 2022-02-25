import { useState, useEffect } from 'react';

// !Here we used arrow function

const useFetch = (url) => {
    const [data, setData] = useState(null);

    // #here I used fetch api for fetch data
    useEffect(() => {
        fetch(url).then((response) => response.json()).then((data) => setData(data));
    }, [url]);

    return [data];
};

export default useFetch;