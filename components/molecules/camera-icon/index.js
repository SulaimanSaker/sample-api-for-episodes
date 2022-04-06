import React, { useRef } from "react";

import { FiCamera } from "react-icons/fi";

import { Styles } from "./styles";

const CameraIcon = ({ onChange }) => {
  const commentImgRef = useRef();

  return (
    <Styles>
      <div className="camera-icon">
        <input
          hidden
          type="file"
          multiple
          ref={commentImgRef}
          accept="image/x-png,image/gif,image/jpeg"
          name="imagesUpload"
          onChange={onChange}
          onClick={(event) => {
            event.target.value = null;
          }}
        />

        <FiCamera
          size="1.5rem"
          color="var(--gray-9)"
          onClick={() => commentImgRef.current.click()}
        />
      </div>
    </Styles>
  );
};

export default CameraIcon;
