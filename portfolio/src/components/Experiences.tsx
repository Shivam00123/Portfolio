"use client";

import React, { useEffect, useState } from "react";
import CardTemplate from "./CardTemplate";
import axios from "axios";
import { GenericObject } from "../../interfaces/types";
import Fetching from "./Fetching";

const Experiences = () => {
  const [experiences, setExperiences] = useState<GenericObject[]>([]);
  const fetchExperiencesData = async () => {
    const data = await axios.get(
      "https://portfolio-1d33.onrender.com/v1/experiences"
    );
    setExperiences(data.data.data);
  };

  useEffect(() => {
    fetchExperiencesData();
  }, []);

  return (
    <>
      {experiences?.length ? (
        <CardTemplate
          title="Experience"
          id="experience"
          data={experiences}
          showDate={true}
          link={false}
        />
      ) : (
        <Fetching title="Experience Data" />
      )}
    </>
  );
};

export default Experiences;
