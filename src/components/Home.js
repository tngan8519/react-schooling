import React from "react";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";
import Image from "./Image";
import images from "../images";
function Home() {
  return (
    <div className="hone">
      <Welcome />
      <div className="pick">
        <p className="question">Who do you like?</p>
        <div className="image">
          <div className="row align-items-center">
            <Link
              to="chooseCourse?in=mickey"
              className="col-sm-6 col-lg-4 mx-auto"
            >
              <Image src={images.mickey} />
            </Link>
            <Link
              to="chooseCourse?in=ninja"
              className="col-sm-6 col-lg-4 mx-auto"
            >
              <Image src={images.ninja} />
            </Link>
            <Link
              to="chooseCourse?in=pikachu"
              className="col-sm-6 col-lg-4 mx-auto"
            >
              <Image src={images.pikachu} />
            </Link>
            <Link
              to="chooseCourse?in=sonic"
              className="col-sm-6 col-lg-4 mx-auto"
            >
              <Image src={images.sonic} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
