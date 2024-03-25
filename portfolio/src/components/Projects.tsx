import React, { useEffect, useState } from "react";
import CardTemplate from "./CardTemplate";
import { GenericObject } from "../../interfaces/types";
import axios from "axios";
import Fetching from "./Fetching";

const Projects = () => {
  const [companyProjects, setCompanyProjects] = useState<GenericObject[]>([]);

  const fetchCompanyProjects = async () => {
    const cp = await axios.get(
      "https://portfolio-1d33.onrender.com/v1/companyProjects"
    );
    setCompanyProjects(cp.data.data);
  };

  useEffect(() => {
    fetchCompanyProjects();
  }, []);

  return (
    <>
      {companyProjects?.length ? (
        <CardTemplate
          title="Company projects"
          id="company projects"
          data={companyProjects}
        />
      ) : (
        <Fetching title="Company Projects" />
      )}
    </>
  );
};

export default Projects;
