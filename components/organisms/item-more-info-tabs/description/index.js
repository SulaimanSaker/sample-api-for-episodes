import React from "react";

import { InlineSVG } from "components/atoms";

import { Styles } from "./styles";

const Description = () => {
  return (
    <Styles>
      <div className="row justify-content-between">
        <div className="col col-12 col-lg-7 pr-0">
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
            nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a
            odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in
            elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
            augue. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
            bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio
            sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
            tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor
            eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum
            sit amet a augue.
          </p>
        </div>

        <div className="col col-auto right-column pr-10 mt-4 mt-lg-0">
          <div className="list">
            <div>
              Composition Cotton - <b>64%, Polyamide - 31%, Elastane - 5%</b>
            </div>
            <div>
              - Country of production <b>Russia</b>
            </div>
            <div>
              - The size of the model on the photo <b>48/50</b>
            </div>
            <div>
              - Parameters of the model <b>98-80-92</b>
            </div>
            <div>
              - Growth of the model in photo <b>188</b>
            </div>
            <div>- Length 73 centimeters</div>
            <div>- Sleeve length 64 cm</div>
          </div>

          <div className="d-flex align-items-baseline">
            <InlineSVG src="/images/icons/lock.svg" height="1.1em" className="mr-2" />

            <div>100% Secure Payments</div>
          </div>

          <div className="d-flex align-items-baseline">
            <InlineSVG src="/images/icons/reward.svg" height="1.1em" className="mr-2" />

            <div>100% Authentic</div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Description;
