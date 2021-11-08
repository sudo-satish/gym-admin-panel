import React from "react";
import { NextPage } from "next";
import DashboardWrapper from "../../components/DashboardWrapper/DashboardWrapper";
import Gyms from "../../components/Gyms";

const GymsPage: NextPage = () => {
  return (
    <DashboardWrapper>
      <Gyms />
    </DashboardWrapper>
  );
};

export default GymsPage;
