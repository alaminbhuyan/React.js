import React, { useState, useEffect } from 'react';
// import { NavLink } from "react-router-dom";
import axios from "axios";
import Post from '../components/Post';



// # Create Axios Instance

const customAxios = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});


const Blog = () => {
    const [data, setData] = useState([]);

    document.title = "Blog-Page";


    //? Fetch data ❤❤❤
    const getData = () => {
        customAxios.get('/posts').then((response) => {
            // console.log(response.data);
            setData(response.data);
        })
    };

    //? set lifecycle hooks
    useEffect(() => { getData() }, []);

    // !In the code, we create an arrow function getData() where we fetched data from the server and passed in into the state function setData() and called it in the lifecycle hooks.The second parameter [] empty array was passed so that the lifecycle hooks runs just once.


    return (
        <React.Fragment>
            {data.map((singleData) => {
                return (
                    <Post key={singleData.id} unique_id={singleData.id} title={singleData.title} body={singleData.body} />
                )
            })}
        </React.Fragment>
    );
};

export default Blog;




// // # Create Axios Instance

// const customAxios = axios.create({
//     baseURL: "https://jsonplaceholder.typicode.com"
// });

// const published_time = new Date().toDateString();

// const Blog = () => {
//     const [data, setData] = useState([]);


//     document.title = "Blog-Page"


//     //? Fetch data ❤❤❤
//     const getData = () => {
//         customAxios.get('/posts').then((response) => {
//             console.log(response.data);
//             setData(response.data);
//         })
//     };

//     //? set lifecycle hooks
//     useEffect(() => { getData() }, []);

//     // !In the code, we create an arrow function getData() where we fetched data from the server and passed in into the state function setData() and called it in the lifecycle hooks.The second parameter [] empty array was passed so that the lifecycle hooks runs just once.

//     return (
//         <React.Fragment>
//             <div>
//                 {data.map((singleData) => {
//                     return (

//                         <div className="container mt-5" key={singleData.id}>
//                             <div className="row">
//                                 <div className="col">
//                                     <h3 style={{ fontFamily: 'Raleway sans- serif' }}>{singleData.title}</h3>
//                                     <small className="" style={{ color: 'blue' }}>Published by: Alamin, {published_time}</small>
//                                     <p className="mt-2">{singleData.body}</p>
//                                     <NavLink to="/post" className='text-decoration-none text-dark fw-bold'>Read more...</NavLink>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 })}
//             </div>
//         </React.Fragment>
//     )
// }

// export default Blog;