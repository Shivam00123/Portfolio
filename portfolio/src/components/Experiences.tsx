"use client";

import React, { useEffect, useState } from "react";
import CardTemplate from "./CardTemplate";
import axios from "axios";
import { GenericObject } from "../../interfaces/types";

const Experiences = () => {
  const [experiences, setExperiences] = useState<GenericObject[]>([]);
  const fetchExperiencesData = async () => {
    const data = await axios.get("/api/v1/experiences");
    setExperiences(data.data.data);
  };

  useEffect(() => {
    fetchExperiencesData();
  }, []);

  return (
    <CardTemplate
      title="Experience"
      id="experience"
      data={experiences}
      showDate={true}
    />
  );
};

export default Experiences;
