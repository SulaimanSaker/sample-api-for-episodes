import React, { useState } from "react";

import { v4 as uuid } from "uuid";

import { Button, Input } from "components/atoms";
import { CommentImage, CameraIcon } from "components/molecules";

import uploadImage from "helpers/uploadImage";

import http from "services/http";
import { SAVE_COMMENT, GET_RECORD_COMMENTS } from "constants/endpoints";

import { Styles } from "./styles";

const defaultComment = {
  text: "",
  img: "",
  uploading: false,
  serverImgPath: "",
};

const AddComment = ({ articleId, setComments, comments }) => {
  const [commentToSave, setCommentToSave] = useState(defaultComment);

  const handleTyping = (e) => {
    setCommentToSave((state) => ({ ...state, text: e.target.value }));
  };

  const selectImage = (e) => {
    uploadImage(
      e,
      (file) =>
        setCommentToSave((state) => ({
          ...state,
          img: URL.createObjectURL(file),
          uploading: true,
        })),
      (data) =>
        setCommentToSave((state) => ({
          ...state,
          serverImgPath: data.content,
          uploading: false,
        })),
      () => setCommentToSave((state) => ({ ...state, img: "" }))
    );
  };

  const deleteImage = () => {
    setCommentToSave((state) => ({ ...state, img: "", serverImgPath: "" }));
  };

  const addComment = () => {
    const oldComments = [...comments];
    const newComments = [...comments];

    newComments.push({
      id: `new${uuid()}`,
      clientName: "Sulaiman Saker",
      clientImage: commentToSave.img,
      commentImage: commentToSave.img,
      alt: "Sulaiman Saker",
      text: commentToSave.text,
      children: [],
    });

    setComments(newComments);

    const data = {
      recordId: articleId,
      text: commentToSave.text,
      commentId: 0,
      imagePath: commentToSave.serverImgPath,
    };

    http
      .post(SAVE_COMMENT, data)
      .then(() => {
        setCommentToSave({ text: "", img: "", serverImgPath: "" });

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
  };

  return (
    <Styles>
      <div className="add-comment mt-8 ">
        <h2 className="heading mb-4 font-size-18">Add Comment</h2>

        <div className="input mb-6 font-size-16 message__container">
          <Input
            label="Message"
            type="textarea"
            value={commentToSave.text}
            onChange={handleTyping}
          />

          <CameraIcon onChange={selectImage} />
        </div>

        {commentToSave.img && (
          <div className="mb-6">
            <CommentImage src={commentToSave.img} onClick={deleteImage} />
          </div>
        )}

        <div className="font-size-16">
          <Button primary rounded big disabled={commentToSave.uploading} onClick={addComment}>
            Post Comment
          </Button>
        </div>
      </div>
    </Styles>
  );
};

export default AddComment;
