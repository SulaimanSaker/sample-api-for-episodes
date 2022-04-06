import React, { useEffect, useState } from "react";

import { CommentsList, AddComment } from "components/organisms";

import { Styles } from "./styles";

import dynamic from "next/dynamic";
const ArcLines = dynamic(() => import("../../templates/auth/arc-lines"), {
  ssr: false,
});

const Comments = ({ articleId, comments: defaultComments }) => {
  const [comments, setComments] = useState(defaultComments);
  const [arcWidth, setActWidth] = useState();

  useEffect(() => {
    setActWidth((document.getElementById("comments-wrapper").offsetWidth * 9) / 10);
  }, []);
  return (
    <Styles>
      <section className="comments">
        <div className="arc-lines-container">
          <ArcLines scrolled width={arcWidth} />
        </div>

        <div id="comments-wrapper" className="wrapper container">
          <CommentsList articleId={articleId} comments={comments} setComments={setComments} />

          <AddComment articleId={articleId} comments={comments} setComments={setComments} />
        </div>
      </section>
    </Styles>
  );
};

export default Comments;
