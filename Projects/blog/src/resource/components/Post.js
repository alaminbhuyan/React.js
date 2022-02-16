import React from 'react';
import { NavLink } from "react-router-dom";



const published_time = new Date().toDateString();

const Post = (props) => {
    document.title = "Post-Page";
    
    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }

    return (
        <React.Fragment>
            <div className="container my-5 p-4" style={{ backgroundColor: "#f5f2f2"}}>
                <div className="row">
                    <div className="col">
                        <NavLink to={`/postItem/${props.unique_id}`} className='text-decoration-none text-dark fw-bold' ><h4>{capitalize(props.title)}</h4></NavLink>
                        <small className="" style={{ color: 'blue' }}>Published by: Alamin, {published_time}</small>
                        <p className="mt-2">{props.body}</p>
                        <NavLink to={`/postItem/${props.unique_id}`} className='text-decoration-none text-dark fw-bold' ><small>Read more...</small></NavLink>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Post;






// ? Fetching multiple post from api

// # Create Axios Instance

// const customAxios = axios.create({
//     baseURL: "https://jsonplaceholder.typicode.com"
// });

// const published_time = new Date().toDateString();

// const Post = () => {
//     const [data, setData] = useState([]);

//     document.title = "Post-Page";

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
//             {data.map((singleData) => {
//                 return (

//                     <div className="container mt-5" key={singleData.id}>
//                         <div className="row">
//                             <div className="col">
//                                 <h2 style={{ fontFamily: 'Raleway sans- serif' }}>{singleData.title}</h2>
//                                 <small className="" style={{ color: 'blue' }}>Published by: Alamin, {published_time}</small>
//                                 <p className="mt-2">{singleData.body}</p>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             })}
//         </React.Fragment>
//     )
// };

// export default Post;




//# This code for fetching data for one post

// const customAxios = axios.create({
//     baseURL: "https://jsonplaceholder.typicode.com"
// })


// const published_time = new Date().toDateString()
// const value = {};
// const Post = () => {
//     const [data, setData] = useState([]);

//     document.title = "Post-Page";

//     //? Fetch data ❤❤❤
//     const getData = () => {
//         customAxios.get('/posts/1').then((response) => {
//             console.log(response.data);
//             setData(response.data);
//         })
//     };
//     //? set lifecycle hooks
//     useEffect(() => { getData() }, [])

//     // !In the code, we create an arrow function getData() where we fetched data from the server and passed in into the state function setData() and called it in the lifecycle hooks.The second parameter [] empty array was passed so that the lifecycle hooks runs just once.

//     return (
//         <React.Fragment>
//             <div className="container mt-5">
//                 <div className="row">
//                     <div className="col">
//                         <h2 style={{ fontFamily: 'Raleway sans- serif' }}>What is React?</h2>
//                         <small className="" style={{ color: 'blue' }}>Published by: Alamin, {published_time}</small>
//                         <p className="mt-2">{data.title}</p>
//                         {/* <p className="mt-2">React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications</p> */}
//                     </div>
//                 </div>
//             </div>
//         </React.Fragment>
//     )
// }

// export default Post;