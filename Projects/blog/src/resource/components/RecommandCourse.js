import React from 'react'
import Course from './Course'
import reactImg from "../../images/React2.jpg"
import nextImg from "../../images/next.jpg"
import typescriptImg from "../../images/typescript.jpg"

const RecommandCourse = () => {
    const first_card = {
        title: "React Js Blog For Beginners",
        body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        image: reactImg,
        urlLink: "https://reactjs.org/"
    };
    const second_card = {
        title: "Next Js Blog For Beginners",
        body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        image: nextImg,
        urlLink: "https://nextjs.org/"
    };
    const third_card = {
        title: "TypeScript Js Blog For Beginners",
        body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        image: typescriptImg,
        urlLink: "https://www.typescriptlang.org/"
    };

    return (
        <React.Fragment>
            <div className="album py-5 bg-light">
                <div className="container">
                    <h3 className='text-center my-5'>Recommended Courses</h3>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <Course information={first_card} />
                        <Course information={second_card} />
                        <Course information={third_card} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RecommandCourse;