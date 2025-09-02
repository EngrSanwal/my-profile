import React from "react";
import "./About.css";
import img1 from "../../assets/pics/mypic.png";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={img1}
                alt="profile_pic"
                style={{filter: "brightness(98%)"}}
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I’m Sanwal Mumtaz, a Full-Stack MERN Developer specializing in MongoDB, Express.js, React.js, Node.js, and Next.js, with growing expertise in React Native for cross-platform mobile apps.<br/>

                 I have experience building scalable web applications, real-time systems, and optimized APIs, along with strong skills in SEO and website performance improvement. I’ve worked with clients on platforms like Fiverr, developed complete projects, and also shared my knowledge by creating a React.js course on Udemy.  Here is the link to my created Course: https:<br/>

   <a href="https://www.udemy.com/course/complete-guide-to-reactjs-new-version19-inc-nextjs-14/?referralCode=8248276742EC52A609C1" target="_blank" 
   style={{
    marginTop: "10px",
    display: "inline-block",
    padding: "10px 18px",
    backgroundColor: "#2563eb",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: 500,
    transition: "background-color 0.3s ease, transform 0.2s ease",
    width: "100%",
    textAlign: "center"
  }}>  {/* ✅ ADDED CLOSING > HERE */}
    My Udemy Course (I'm the Instructor) </a>     </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
