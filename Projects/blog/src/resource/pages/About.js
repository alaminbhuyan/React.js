const About = () => {
    document.title = "About-Page"
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col">
                    <h2 className="">About Us</h2><br />
                    <h4>Welcome to CodeWithAlamin</h4>
                    <p>We provide online training in disciplines such as Html, CSS, JavaScript, React js among others, where technologies and best practice are changing rapidly</p><br />
                    <h4>Our Vision</h4>
                    <p>To provide Free Online Training in the field of Web development for all.</p><br /><br />
                    <p>We also provide code and note on github</p>
                    <p>In disciplines of Web development etc.</p>
                    <p>We also provide real-time projects in the field of Web development.</p><br />
                    <h4>Contact</h4>
                    <span>E-mail: <a href="https://www.gmail.com">alaminbhuyan633@gmail.com</a></span>
                </div>
            </div>
        </div>
    )
}

export default About;