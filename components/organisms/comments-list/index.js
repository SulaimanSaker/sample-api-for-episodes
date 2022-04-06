import React, { useState } from "react";

import { Row, Col } from "react-bootstrap";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsChatSquareText } from "react-icons/bs";

import { Avatar, CommentImage } from "components/molecules";
import { RepliesList, AddReply } from "components/organisms";

import http from "services/http";

import { DELETE_COMMENT, LIKE_COMMENT, UNLIKE_COMMENT } from "constants/endpoints";

import { Styles } from "./styles";

const defaultReplyToSave = {
  commentId: "",
  text: "",
  img: "",
  uploading: false,
  serverImgPath: "",
};

const CommentsList = ({ articleId, comments, setComments }) => {
  const [replyToSave, setReplyToSave] = useState(defaultReplyToSave);

  const toggleReply = (id) => {
    setReplyToSave((state) => {
      if (state.commentId === id) {
        return defaultReplyToSave;
      } else {
        return { ...state, commentId: id };
      }
    });
  };

  const deleteComment = (id) => {
    const oldComments = [...comments];
    const newComments = [...comments];

    const index = comments.findIndex((c) => c.id === id);

    newComments.splice(index, 1);

    setComments(newComments);

    const config = {
      params: {
        commentId: id,
      },
    };

    http.delete(DELETE_COMMENT, config).catch(() => {
      setComments(oldComments);
    });
  };

  const toggleLiked = (id) => {
    const oldComments = [...comments];
    const newComments = [...comments];

    const index = comments.findIndex((c) => c.id === id);

    const oldLiked = comments[index].liked;

    const oldLikesNumber = comments[index].likesNumber;

    const config = {
      params: {
        commentId: id,
      },
    };

    if (oldLiked) {
      newComments[index] = {
        ...newComments[index],
        liked: false,
        likesNumber: oldLikesNumber - 1,
      };

      setComments(newComments);

      http.get(UNLIKE_COMMENT, config).catch(() => {
        setComments(oldComments);
      });
    } else {
      newComments[index] = {
        ...newComments[index],
        liked: true,
        likesNumber: oldLikesNumber + 1,
      };

      setComments(newComments);

      http.get(LIKE_COMMENT, config).catch(() => {
        setComments(oldComments);
      });
    }
  };

  const toggleReplies = (commentId) => {
    const newComments = [...comments];

    const index = comments.findIndex((c) => c.id === commentId);

    const oldShowReplies = comments[index]?.showReplies;

    newComments[index] = { ...newComments[index], showReplies: !oldShowReplies };

    setComments(newComments);
  };

  return (
    <Styles>
      <h2 className="heading font-size-18">Comments ({comments.length})</h2>

      {comments.map(
        ({
          id,
          clientName,
          clientImage,
          text,
          commentImage,
          children,
          liked,
          likesNumber,
          showReplies,
          canDelete,
        }) => (
          <Row key={id} className="mt-5  margin-befor-comments">
            <Col md={12}>
              <Row>
                <Col className="col-1 mr-2">
                  <Avatar
                    src={
                      clientImage ||
                      "https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-standaard-avatar-profielpictogram-voor-man-grijze-fotoplaceholder-illustratiesvector.jpg?ver=6"
                    }
                    alt={clientName}
                  />
                </Col>

                <Col>
                  <Row className="justify-content-between">
                    <Col className="col-6 col-md-8">
                      <div className="client-name font-size-18">{clientName}</div>
                    </Col>

                    {!String(id).startsWith("new") && (
                      <Col xs="auto">
                        <Row className="justify-content-between">
                          <Col>
                            <button
                              className="pull-right reply-button font-size-16"
                              onClick={() => toggleReply(id)}
                            >
                              reply
                            </button>
                          </Col>

                          {canDelete && (
                            <Col>
                              <button
                                className="pull-right reply-button font-size-16"
                                onClick={() => deleteComment(id)}
                              >
                                Delete
                              </button>
                            </Col>
                          )}
                        </Row>
                      </Col>
                    )}
                  </Row>

                  <div className="text mb-3 font-size-16">{text}</div>
                  {commentImage && (
                    <div className="mb-3">
                      <CommentImage src={commentImage} />
                    </div>
                  )}

                  {!String(id).startsWith("new") && (
                    <div className="d-flex likes-replies">
                      <button
                        className="likes d-flex align-items-center mr-4"
                        onClick={() => toggleLiked(id)}
                      >
                        <div className="icon mr-2">
                          {liked && (
                            <FaHeart
                              fill="var(--gray-8)"
                              className="animate__animated animate__pulse like-icon"
                            />
                          )}

                          {!liked && (
                            <FaRegHeart
                              fill="var(--gray-8)"
                              className="animate__animated animate__pulse like-icon"
                            />
                          )}
                        </div>

                        <div className="font-size-16">{likesNumber} likes</div>
                      </button>

                      <button
                        className="likes d-flex align-items-center"
                        onClick={() => toggleReplies(id)}
                      >
                        <div className="icon mr-2">
                          <BsChatSquareText
                            fill="var(--gray-8)"
                            className="animate__animated animate__pulse like-icon"
                          />
                        </div>

                        <div className="font-size-16">{children?.length} replies</div>
                      </button>
                    </div>
                  )}

                  {showReplies && <RepliesList replies={children} />}

                  {replyToSave.commentId === id && (
                    <AddReply
                      articleId={articleId}
                      commentId={id}
                      comments={comments}
                      setComments={setComments}
                    />
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        )
      )}
    </Styles>
  );
};

export default CommentsList;
