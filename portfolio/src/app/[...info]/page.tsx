"use client";

import Screen from "@/components/Screen";
import React, { useEffect, useState } from "react";

import Details from "@/components/Details";
import { notFound } from "next/navigation";
import { GenericObject } from "../../../interfaces/types";
import axios from "axios";

const NoDataFound = () => {
  notFound();
};

const Page = ({ params }: { params: any }) => {
  const [id, section] = params.info;
  if (!id || !section) {
    notFound();
  }

  const [noDataFound, setNoDataFound] = useState<boolean>(false);

  const [data, setData] = useState<GenericObject | null>(null);

  const fetchData = async () => {
    try {
      let collectionName;
      switch (decodeURIComponent(section)) {
        case "company projects":
          collectionName = "companyprojects";
          break;
        case "personal projects":
          collectionName = "personalProjects";
          break;
      }
      const response = await axios.get(
        `https://portfolio-1d33.onrender.com/v1/${collectionName}/${id}`
      );

      setData(response.data.data);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      if (!data) {
        setNoDataFound(true);
      }
    }, 5000);
    if (data) {
      clearTimeout(timer);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [data]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Screen>{!noDataFound ? <Details data={data} /> : <NoDataFound />}</Screen>
  );
};

export default Page;
