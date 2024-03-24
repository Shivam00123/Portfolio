import Screen from "@/components/Screen";
import React, { Suspense, useEffect, useState } from "react";

import Details from "@/components/Details";

const LoadingData = () => {
  return <h1>fetching....</h1>;
};

const Page = async ({ params }: { params: any }) => {
  return (
    <Screen>
      <Details params={params} />
    </Screen>
  );
};

export default Page;
