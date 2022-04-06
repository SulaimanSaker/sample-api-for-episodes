import React from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";

import { Styles } from "./styles";

const CommentImage = ({ src, onClick }) => {
  return (
    <Styles>
      <div className="comment-image mb-3">
        <img src={src} alt="" />

        {onClick && (
          <div className="cancel-icon">
            <AiOutlineCloseCircle size="1.5rem" color="var(--gray-9)" onClick={onClick} />
          </div>
        )}
      </div>
    </Styles>
  );
};

export default CommentImage;
