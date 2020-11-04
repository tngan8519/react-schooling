import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import images from "../images";
import Image from "./Image";
import Welcome from "./Welcome";

function CourseSelect() {
  const instructor = useLocation();
  const [teacher, setTeacher] = useState("mickey");
  useEffect(() => {
    setTeacher(instructor.search.split("=")[1]);
  }, [instructor]);
  return (
    <div className="courseSelect">
      <Welcome />

      <div className="pick">
        <Link to="/" className="pickTeacher">
          Pick teacher again
        </Link>
        <p className="question">What do you like to learn?</p>
        <div className="image">
          <div className="row align-items-center">
            <Link
              to={`subject?in=${teacher}&sub=math`}
              className="col-sm-6 col-lg-4 mx-auto"
            >
              <Image src={images.math} />
            </Link>

            <Link
              to={`subject?in=${teacher}&sub=science`}
              className="col-sm-6 col-lg-4 mx-auto"
            >
              <Image src={images.science} />
            </Link>
            <Link
              to={`subject?in=${teacher}&sub=geo`}
              className="col-sm-6 col-lg-4 mx-auto"
            >
              <Image src={images.geo} />
            </Link>
            <Link
              to={`subject?in=${teacher}&sub=exercise`}
              className="col-sm-6 col-lg-4 mx-auto"
            >
              <Image src={images.exercise} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSelect;
