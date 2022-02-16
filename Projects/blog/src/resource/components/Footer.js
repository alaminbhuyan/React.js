import React from "react";
import facebook from "../../socialMediaIcon/facebook.png"
import instagram from "../../socialMediaIcon/instagram.png"
import "./Footer.css"



const Footer = () => {

  return (
    <React.Fragment>
      <div className="">
        <footer className="footer myfooter">
          <div className="container">
            <div className="row p-3">
              <div className="col-md-6 col-sm-12 d-flex justify-content-lg-start justify-content-sm-center">
                <p className="pt-3">&copy; 2022-2023 <b>CodeWithAlamin</b></p>
              </div>
              <div className="col-md-6 col-sm-12 d-flex justify-content-lg-end justify-content-sm-center">
                <div className="mx-2">
                  <a href="https://www.facebook.com">
                    <img src={facebook} alt="facebookImg" />
                  </a>
                </div>
                <div className="mx-2">
                  <a href="https://www.instagram.com">
                    <img src={instagram} alt="instagramImg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* <style>{'html {height:100vh}','body {display:flex; flex-direction:column;height:100vh;}'}</style> */}

      {/* <style>{ 'body {background-color:'+rong+';}' }</style> */}


    </React.Fragment>
  );
};

export default Footer;
