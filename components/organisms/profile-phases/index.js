import React, { useState } from "react";

import { Styles } from "./styles";
import { CustomCheckBox, Image } from "components/atoms";
function ProfilePhases() {
  const [CheckBoxes, setCheckBoxes] = useState({
    cycle: false,
    plan: false,
    track: false,
    kids: false,
  });

  return (
    <Styles>
      <section className="register-plan-pregnancy">
        <div className="grid">
          <button
            className="item first-item first-row-item mt-2 mb-2"
            onClick={() => setCheckBoxes((prev) => ({ ...prev, cycle: !prev.cycle }))}
          >
            <CustomCheckBox checked={CheckBoxes.cycle} />

            <div className="mt-2 mb-2">
              <div className="d-flex align-items-center">
                <div className="option-image mr-2">
                  <Image src="/images/register/7-2.png" alt="" />
                </div>
                <div className="text font-size-35">
                  Track
                  <div>Your Cycle</div>
                </div>
              </div>
            </div>
          </button>

          <button
            className="item second-item first-row-item mt-2 mb-2"
            onClick={() => setCheckBoxes((prev) => ({ ...prev, plan: !prev.plan }))}
          >
            <CustomCheckBox checked={CheckBoxes.plan} />

            <div className="mt-2 mb-2">
              <div className="d-flex align-items-center">
                <div className="option-image mr-2">
                  <Image src="/images/register/mom.png" alt="" />
                </div>
                <div className="text font-size-35">
                  Plan
                  <div>your pregnancy</div>
                </div>
              </div>
            </div>
          </button>

          <button
            className="item third-item second-row-item mt-2 mb-2"
            onClick={() => setCheckBoxes((prev) => ({ ...prev, track: !prev.track }))}
          >
            <CustomCheckBox checked={CheckBoxes.track} />

            <div className="mt-2 mb-2">
              <div className="d-flex align-items-center">
                <div className="option-image mr-2">
                  <Image src="/images/register/mom.png" alt="" />
                </div>
                <div className="text font-size-35">
                  Track
                  <div>Your Pregnancy</div>
                </div>
              </div>
            </div>
          </button>

          <button
            className="item fourth-item second-row-item mt-2 mb-2"
            onClick={() => setCheckBoxes((prev) => ({ ...prev, kids: !prev.kids }))}
          >
            <CustomCheckBox checked={CheckBoxes.kids} />

            <div className="mt-2 mb-2">
              <div className="d-flex align-items-center">
                <div className="option-image mr-2">
                  <Image src="/images/register/3.png" alt="" />
                </div>
                <div className="text font-size-35">
                  Keep up
                  <div>with My Kids</div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </section>
    </Styles>
  );
}

export default ProfilePhases;
