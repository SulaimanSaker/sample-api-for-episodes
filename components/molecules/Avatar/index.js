import { Image } from "components/atoms";
import React from "react";
import { Styles } from "./styles";

function Avatar({ src, alt }) {
  return (
    <Styles>
      <div className="avatar">
        <Image width="100%" height="100%" src={src} alt={alt} />
      </div>
    </Styles>
  );
}

export default Avatar;
