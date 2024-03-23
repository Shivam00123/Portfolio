import React, { useEffect, useState } from "react";
import CardTemplate from "./CardTemplate";
import { GenericObject } from "../../interfaces/types";
import axios from "axios";

const Projects = () => {
  const [companyProjects, setCompanyProjects] = useState<GenericObject[]>([]);

  const fetchCompanyProjects = async () => {
    const cp = await axios.get("/api/v1/companyProjects");
    setCompanyProjects(cp.data.data);
  };

  useEffect(() => {
    fetchCompanyProjects();
  }, []);

  return (
    <CardTemplate
      title="Company projects"
      id="company projects"
      data={companyProjects}
    />
  );
};

export default Projects;
