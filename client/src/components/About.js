import React from "react";
import banner from "../images/Scroll Banner.png"

const About = () => {
   return (
      <div className="about">
         <div className="bannerContainer">
            <img src={banner} alt="banner" />
         </div>
         <div className="aboutContent">
            <h1>About MoneyPlant</h1>
            <p>MoneyPlant is a new age financial tool to allow you to manage your wealth sustainably.</p>
            <h1>How?</h1>
            <p>By providing a platform to evaluate ESG scores of companies alongside traditional bottomline goals.</p>
            <h1>What does ESG mean?</h1>
            <p>ESG stands for Environment, social and governance. ESG stocks are company stocks that focus on sustainability and environmental concerns rather than just considering its bottom line.
               These companies are profit driven but achieve their goals that impact the environment minimally. More companies are showcasing their ability to impact society and the environment 
               positively by disclosing ESG metrics.
            </p>
            <p>
               The metrics range from climate change, pollution and waste, social opportunities, business ethics, privacy and data security and more.
            </p>
         </div>
      </div>
   );
};



export default About;
