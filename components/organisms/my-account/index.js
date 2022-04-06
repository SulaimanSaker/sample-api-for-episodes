import React from "react";
import { ProfileCycle, ProfilePersonalInfo, RegisterStepper } from "..";
import { Styles } from "./styles";

import ProfileDueDate from "../profile-due-date";

function MyAccount() {
  return (
    <Styles>
      <RegisterStepper isDescribeYourNeedsOnly />

      <div className="personal__information">
        <div className="content">
          <ProfilePersonalInfo />
          <ProfileCycle />
          <ProfileDueDate />
        </div>
      </div>
    </Styles>
  );
}

export default MyAccount;
