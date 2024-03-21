import React from "react";

import HomePageComp from "../../components/HomePage";

import { PageContextProvider } from "./context";

const HomePage = () => {
  return (
    <PageContextProvider>
      <HomePageComp />
    </PageContextProvider>
  );
};

export default HomePage;
