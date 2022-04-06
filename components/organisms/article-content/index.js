import React, { useState } from "react";

import { Parser, ProcessNodeDefinitions } from "html-to-react";

import moment from "moment";

import ReactPlayer from "react-player/lazy";

import { Row, Col } from "react-bootstrap";

import { FaAngleDown, FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from "react-icons/fa";

import { Button } from "components/atoms";
import { SocialLinks } from "components/molecules";
import { Advertisements } from "components/organisms";

const links = [
  { name: "facebook", href: "/" },
  { name: "twitter", href: "/" },
];

import { Styles } from "./styles";

const customElements = {
  advertisements: Advertisements,
};

const htmlParser = new Parser(React);
const processNodeDefinitions = new ProcessNodeDefinitions(React);

const processingInstructions = [
  {
    shouldProcessNode: (node) => {
      return node.name && customElements[node.name];
    },
    processNode: (node) => {
      let CustomElement = customElements[node.name];
      return <CustomElement />;
    },
  },
  {
    shouldProcessNode: () => true,
    processNode: processNodeDefinitions.processDefaultNode,
  },
];

const ArticleContent = ({ articleId, details, toggleLiked, toggleReadLater }) => {
  const {
    title,
    subCategoryName,
    publishOnDate,
    liked: defaultLiked,
    readLater: defaultReadLater,
    reviewedsBy,
    description,
    mediaFiles,
    sourceName,
  } = details || {};

  const [liked, setLiked] = useState(defaultLiked);
  const [readLater, setReadLater] = useState(defaultReadLater);
  const [references, setReferences] = useState(false);

  let stripedHtml = description?.replace(/@slider_ad@(.*?)/g, `<Advertisements />`);

  const videos = mediaFiles?.filter((file) => file.typeId === 2);

  const toggleReferences = () => {
    setReferences((state) => !state);
  };

  return (
    <Styles>
      <section className="article-content container">
        <header className="article-content__header">
          <div>
            <h1 className="title">{title}</h1>

            <div className="des1">{subCategoryName} </div>

            <div className="des2">
              {sourceName && <span>Written by {sourceName} | </span>}
              {reviewedsBy.length > 0 && (
                <span>
                  Approved By{" "}
                  {reviewedsBy.map((viewer, index) => (
                    <span key={index}>
                      {viewer.active ? (
                        <a href="/" className="approver">
                          {viewer.name}
                        </a>
                      ) : (
                        `${viewer.name}`
                      )}
                      {reviewedsBy.length - 1 === index
                        ? "."
                        : reviewedsBy.length - 1 === index + 1
                        ? " and "
                        : ","}
                    </span>
                  ))}
                </span>
              )}
            </div>
          </div>

          {publishOnDate && (
            <div className="des2 mt-1">Last Updated {moment(publishOnDate).format()}</div>
          )}
        </header>

        <div className="article-content__description">
          {htmlParser.parseWithInstructions(stripedHtml, () => true, processingInstructions)}
        </div>

        {videos?.[0]?.youTubePath && (
          <div className="video">
            <ReactPlayer url={videos?.[0]?.youTubePath} width="50%" height="21rem" />
          </div>
        )}

        <div className="article-content__social-links">
          <SocialLinks links={links} color="var(--gray-8)" />
        </div>

        <Row className="justify-content-between ">
          <Col>
            <Button primary rounded big onClick={toggleReferences}>
              <div className="row justify-content-center align-items-center">
                <div className="col col-auto pr-4">Check References</div>
                <div className="col col-auto plus-icon pl-0">
                  <FaAngleDown
                    size="1.1em"
                    className={`${references ? "rotate_arrow_up" : "rotate_arrow_down"}`}
                  />
                </div>
              </div>
            </Button>

            {references && (
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: details?.referenceList }}
              ></div>
            )}
          </Col>

          <Col>
            <Row className="justify-content-end like-save-buttons">
              <Col xs="auto">
                {readLater && (
                  <button onClick={() => toggleReadLater(articleId, readLater, setReadLater)}>
                    <FaBookmark
                      size="1.4em"
                      fill="var(--gray-8)"
                      className="animate__animated animate__pulse"
                    />
                  </button>
                )}

                {!readLater && (
                  <button onClick={() => toggleReadLater(articleId, readLater, setReadLater)}>
                    <FaRegBookmark
                      size="1.4em"
                      fill="var(--gray-8)"
                      className="animate__animated animate__pulse"
                    />
                  </button>
                )}
              </Col>

              <Col xs="auto">
                {liked && (
                  <button onClick={() => toggleLiked(articleId, liked, setLiked)}>
                    <FaHeart
                      size="1.4em"
                      fill="var(--gray-8)"
                      className="animate__animated animate__pulse"
                    />
                  </button>
                )}

                {!liked && (
                  <button onClick={() => toggleLiked(articleId, liked, setLiked)}>
                    <FaRegHeart
                      size="1.4em"
                      fill="var(--gray-8)"
                      className="animate__animated animate__pulse"
                    />
                  </button>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </Styles>
  );
};

export default ArticleContent;
