import React from "react";

import { Button, Image } from "components/atoms";

import { registerPhase } from "constants/types";

import CheckIcon from "./check-icon";

import { Styles } from "./styles";

const DescribeYourNeeds = ({
  phases,
  togglePhase,
  anySelectedPhase,
  onNext,
  isDescribeYourNeedsOnly,
}) => {
  return (
    <Styles>
      <section className="register-plan-pregnancy">
        <div className="grid">
          <button
            className="item first-item first-row-item"
            onClick={() => togglePhase(registerPhase.TRACK_YOUR_CYCLE)}
          >
            <CheckIcon phases={phases} phase={registerPhase.TRACK_YOUR_CYCLE} />

            <div>
              <div className="d-flex align-items-center">
                <div className="option-image mr-2">
                  <Image src="/images/register/8.png" alt="" />
                </div>
                <div className="text font-size-35">
                  Track
                  <div>Your Cycle</div>
                </div>
              </div>
            </div>
          </button>

          <button
            className="item second-item first-row-item"
            onClick={() => togglePhase(registerPhase.PLAN_YOUR_PREGNANCY)}
          >
            <CheckIcon phases={phases} phase={registerPhase.PLAN_YOUR_PREGNANCY} />

            <div>
              <div className="d-flex align-items-center">
                <div className="option-image mr-2">
                  <Image src="/images/register/7-2.png" alt="" />
                </div>
                <div className="text font-size-35">
                  Plan
                  <div>your pregnancy</div>
                </div>
              </div>
            </div>
          </button>

          <button
            className="item third-item second-row-item"
            onClick={() => togglePhase(registerPhase.TRACK_YOUR_PREGNANCY)}
          >
            <CheckIcon phases={phases} phase={registerPhase.TRACK_YOUR_PREGNANCY} />

            <div>
              <div className="d-flex align-items-center">
                <div className="option-image mr-2">
                  <Image src="/images/register/6.png" alt="" />
                </div>
                <div className="text font-size-35">
                  Track
                  <div>Your Pregnancy</div>
                </div>
              </div>
            </div>
          </button>

          <button
            className="item fourth-item second-row-item"
            onClick={() => togglePhase(registerPhase.KEEP_UP_WITH_MY_KIDS)}
          >
            <CheckIcon phases={phases} phase={registerPhase.KEEP_UP_WITH_MY_KIDS} />

            <div>
              <div className="d-flex align-items-center">
                <div className="option-image mr-2">
                  <Image src="/images/register/5.png" alt="" />
                </div>
                <div className="text font-size-35">
                  Keep up
                  <div>with My Kids</div>
                </div>
              </div>
            </div>
          </button>
        </div>

        {!isDescribeYourNeedsOnly && (
          <div className="button-container">
            <Button
              primary
              rounded
              big
              block
              disabled={!anySelectedPhase()}
              onClick={() => onNext()}
            >
              Next
            </Button>
          </div>
        )}
      </section>
    </Styles>
  );
};

export default DescribeYourNeeds;
