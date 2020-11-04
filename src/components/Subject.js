import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Math from "./Math";
import Geo from "./Geo";
import Excercise from "./Exercise";
function Subject() {
  const instructor = useLocation();
  const [teacher, setTeacher] = useState("mickey");
  const [subject, setSubject] = useState("math");
  useEffect(() => {
    setTeacher(instructor.search.split("&")[0].split("=")[1]);
    setSubject(instructor.search.split("&")[1].split("=")[1]);
  }, [instructor]);
  return (
    <div>
      <Link to="/" className="pickTeacher">
        Pick teacher again
      </Link>
      {subject === "geo" ? (
        <Geo />
      ) : subject === "exercise" ? (
        <Excercise />
      ) : (
        <Math teacher={teacher} subject={subject} />
      )}
    </div>
  );
}

export default Subject;
