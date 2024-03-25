import Loader from "@/components/Loader";
import Screen from "@/components/Screen";
import React from "react";

const loading = () => {
  return (
    <Screen>
      <Loader />
    </Screen>
  );
};

export default loading;
