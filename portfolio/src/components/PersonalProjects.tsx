import React, { useEffect, useState } from "react";
import axios from "axios";

import CardTemplate from "./CardTemplate";
import { GenericObject } from "../../interfaces/types";

const PersonalProjects = () => {
  const [personalProjects, setPersonalProjects] = useState<GenericObject[]>([]);

  const fetchPersonalProjects = async () => {
    const personalprojects = await axios.get("/api/v1/personalProjects");
    setPersonalProjects(personalprojects.data.data);
  };

  useEffect(() => {
    fetchPersonalProjects();
  }, []);
  return (
    <CardTemplate
      title="Personal projects"
      id="personal projects"
      data={personalProjects}
    />
  );
};

export default PersonalProjects;
