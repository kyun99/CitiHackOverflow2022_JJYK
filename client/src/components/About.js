import React from "react";
import banner from "../images/Scroll Banner.png"

const About = () => {
   return (
      <div>
         <div className="bannerContainer">
            <img src={banner} alt="banner" />
         </div>
         <h1>About MoneyPlant</h1>
         <p></p>
      </div>
   );
};

export default About;
