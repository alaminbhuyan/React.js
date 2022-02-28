import { useState, useEffect } from 'react';
import axios from 'axios';


// You can use here normal function but I used here arrow function

const useFetchData = (url) => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(2);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        async function getComments() {
            try {
                const res = await axios.get(url);
                // console.log(res.data);
                setItems(res.data);
            } catch (error) {
                console.log("Something is wrong");
            }
        }
        getComments();
    }, [url]);

    const fetchComments = async () => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=30`);
            // console.log(res.data);
            return res.data;
        } catch (error) {
            console.log('Error Occurred');
        }
    };

    // async function fetchData(){
    //     const commentsFormServer = await fetchComments();

    //     setItems([...items, ...commentsFormServer]);
    //     if (commentsFormServer.length === 0 || commentsFormServer.length < 30) {
    //         setHasMore(false);
    //     }
    //     setPage(page + 1);
    // };
    
    const fetchData = async () => {
        const commentsFormServer = await fetchComments();

        setItems([...items, ...commentsFormServer]);
        if (commentsFormServer.length === 0 || commentsFormServer.length < 30) {
            setHasMore(false);
        }
        setPage(page + 1);
    };

    return {items, fetchData, hasMore};
};

export default useFetchData;