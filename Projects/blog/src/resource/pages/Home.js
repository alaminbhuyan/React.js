import React from "react";
import RecommandCourse from "../components/RecommandCourse";
import Testimonial from "../components/Testimonial";
import Top from "../components/Top";


const Home = () => {
    document.title = "Home-Page"
    return (
        <React.Fragment>
            <main>
                <Top />
                
                <RecommandCourse />
                
                <Testimonial />
            </main>

        </React.Fragment>
    );
}

export default Home;



