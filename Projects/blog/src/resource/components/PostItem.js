import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


// #create axios instance

const customAxios = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

const PostItem = () => {
    const [data, setData] = useState([]);

    document.title = "BlogItem-Page";

    let { id } = useParams();

    //? Fetch data ❤❤❤
    const getData = () => {
        customAxios.get(`/posts/${id}`).then((response) => {
            // console.log(response.data);
            setData(response.data);
        })
    };

    //? set lifecycle hooks
    useEffect(() => { getData() },[]);

    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }

    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h2 style={{ fontFamily: 'Raleway sans- serif' }}>{data.title}</h2>
                        <small className="" style={{ color: 'blue' }}>Published by: Alamin, </small>
                        <p className="mt-2">{data.body}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PostItem;