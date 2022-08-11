import React from "react";
import banner from "../images/Scroll Banner.png";
import yunus from "../teamPics/yunus.jpg";
import kayyun from "../teamPics/kayyun.jpeg";
import justin from "../teamPics/justin.png";
import jiexiang from "../teamPics/jiexiang.webp";

const About = () => {
   return (
      <div className="container">
         <h1>Meet The Team</h1>

         <div className="aboutContent">
            <img
               src={yunus}
               style={{
                  borderRadius: "50%",
                  width: "250px",
                  marginTop: "2rem",
                  marginRight: "8rem",
               }}
            />
            <div>
               <h1 style={{ color: "white" }}>Yunus Ali</h1>
               <h4 style={{ fontStyle: "italic", color: "white" }}>
                  NUS Year 3 Information Systems
               </h4>
               <span></span>
            </div>
         </div>
         <div className="aboutContent">
            <img
               src={justin}
               style={{
                  borderRadius: "50%",
                  width: "250px",
                  marginTop: "2rem",
                  marginRight: "8rem",
               }}
            />
            <div>
               <h1 style={{ color: "white" }}>Justin</h1>
               <h4 style={{ fontStyle: "italic", color: "white" }}>
                  NUS Year 3 Computer Science
               </h4>
               <span></span>
            </div>
         </div>
         <div className="aboutContent">
            <img
               src={kayyun}
               style={{
                  borderRadius: "50%",
                  width: "250px",
                  marginTop: "2rem",
                  marginRight: "8rem",
               }}
            />
            <div>
               <h1 style={{ color: "white" }}>Kayyun</h1>
               <h4 style={{ fontStyle: "italic", color: "white" }}>
                  NUS Year 3 Computer Science
               </h4>
               <span></span>
            </div>
         </div>
         <div className="aboutContent">
            <img
               src={jiexiang}
               style={{
                  borderRadius: "50%",
                  width: "250px",
                  marginTop: "2rem",
                  marginRight: "8rem",
               }}
            />
            <div>
               <h1 style={{ color: "white" }}>Jie Xiang</h1>
               <h4 style={{ fontStyle: "italic", color: "white" }}>
                  NUS Year 3 Business Analytics
               </h4>
               <span></span>
            </div>
         </div>
      </div>
   );
};

export default About;
