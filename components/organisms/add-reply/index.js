import React, { useState } from "react";

import { v4 as uuid } from "uuid";

import { Input } from "components/atoms";
import { CommentImage, CameraIcon } from "components/molecules";

import uploadImage from "helpers/uploadImage";

import http from "services/http";

import { SAVE_COMMENT, GET_RECORD_COMMENTS } from "constants/endpoints";

import { Styles } from "./styles";

const defaultReplyToSave = {
  commentId: "",
  text: "",
  img: "",
  uploading: false,
  serverImgPath: "",
};

const AddReply = ({ articleId, commentId, comments, setComments }) => {
  const [reply, setReply] = useState(defaultReplyToSave);

  const typing = (e) => {
    setReply((state) => ({ ...state, text: e.target.value }));
  };

  const selectImage = (e) => {
    uploadImage(
      e,
      (file) =>
        setReply((state) => ({
          ...state,
          img: URL.createObjectURL(file),
          uploading: true,
        })),
      (data) =>
        setReply((state) => ({
          ...state,
          serverImgPath: data.content,
          uploading: false,
        })),
      () => setReply((state) => ({ ...state, img: "" }))
    );
  };

  const deleteImage = () => {
    setReply((state) => ({ ...state, img: "", serverImgPath: "" }));
  };

  const addReply = (e, commentId) => {
    if (e.key === "Enter") {
      const oldComments = [...comments];
      const newComments = [...comments];

      const commentIndex = comments.findIndex((c) => c.id === commentId);

      newComments[commentIndex].children.push({
        id: `new${uuid()}`,
        clientName: "Sulaiman Saker",
        clientImage: reply.img,
        commentImage: reply.img,
        alt: "Sulaiman Saker",
        text: reply.text,
        children: [],
      });

      setComments(newComments);

      const data = {
        recordId: articleId,
        text: reply.text,
        commentId,
        imagePath: reply.serverImgPath,
      };

      http
        .post(SAVE_COMMENT, data)
        .then(() => {
          setReply(defaultReplyToSave);

          const config = {
            params: {
              recordId: articleId,
              pageNumber: 1,
              pageSize: 60,
            },
          };

          http.get(GET_RECORD_COMMENTS, config).then((res) => {
            setComments(res.data.content.data);
          });
        })
        .catch(() => {
          setComments(oldComments);
        });
    }
  };

  return (
    <Styles>
      <div className="add-reply">
        <div className="d-flex align-items-center mt-6 ml-4">
          <div>
            <img
              className="image rounded-circle"
              alt="Bootstrap Media Preview"
              src="https://i.imgur.com/HjKTNkG.jpg"
            />
          </div>

          <div className="input">
            <Input
              label="Your reply"
              type="text"
              onKeyDown={(e) => addReply(e, commentId)}
              value={reply.text}
              onChange={typing}
            />

            <CameraIcon onChange={selectImage} />
          </div>
        </div>

        {reply.img && (
          <div className="mt-6">
            <CommentImage src={reply.img} onClick={deleteImage} />
          </div>
        )}
      </div>
    </Styles>
  );
};

export default AddReply;
