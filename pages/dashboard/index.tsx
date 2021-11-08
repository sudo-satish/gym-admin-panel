import React from "react";
import { NextPage } from "next";
import Statistics from "../../components/Statistics/Statistics";
import DashboardWrapper from "../../components/DashboardWrapper/DashboardWrapper";

const DashboardPage: NextPage = () => {
  return (
    <DashboardWrapper>
      <Statistics />
    </DashboardWrapper>
  );
};

export default DashboardPage;
