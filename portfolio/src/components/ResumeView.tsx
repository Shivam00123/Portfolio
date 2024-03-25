"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const ResumeView = () => {
  const [resumePath, setResumePath] = useState<string>("");

  const fetchResumePath = async () => {
    const path = await axios.get("/api/v1/resume");
    console.log(path);
    setResumePath(path.data.data?.[0].pathToPdf);
  };

  useEffect(() => {
    fetchResumePath();
  }, []);

  return (
    <iframe src={resumePath} style={{ width: "100vw", height: "100vh" }} />
  );
};

export default ResumeView;
