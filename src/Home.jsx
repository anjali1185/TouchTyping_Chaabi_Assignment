import React from "react";
import sample from "./bg.mp4";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

export default function Home() {
    
  return (
    <div className="home">
      {/* <video className="videoTag" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video> */}
      {/* <div className="absolute1">
        <Typewriter
          words={["Type faster, type smarter !", "Unlock your typing potential !"]}
          loop={0}
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />{" "}
        <br />
      </div>
      <div className="text">Master the art of touch typing</div> */}
      <div className="absolute2">
      <Link to="/practice">Click To get Started</Link>
      </div>
    </div>
  );
}
