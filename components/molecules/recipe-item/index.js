import React, { useState } from "react";

import { useRouter } from "next/router";

import { FaRegHeart, FaRegBookmark, FaHeart, FaBookmark } from "react-icons/fa";

import { Image, Button, Rating } from "components/atoms";

import { Styles } from "./styles";

import New from "components/atoms/New";
const RecipeItem = ({
  id,
  src,
  alt,
  userImg,
  title,
  rate,
  numberOfRaters,
  name,
  date,
  isNew,
  liked: defaultLiked,
  readLater: defaultReadLater,
  toggleLiked,
  toggleReadLater,
}) => {
  const router = useRouter();

  const [liked, setLiked] = useState(defaultLiked);
  const [readLater, setReadLater] = useState(defaultReadLater);

  return (
    <Styles>
      <div className="recipe__item">
        <div className="recipe__image">
          <Image width="100%" height="100%" src={src} alt={alt} />
        </div>

        <div className="recipe__info">
          <div className="recipe_details">
            <div className="recipe__avatar">
              <Image width="100%" height="100%" src={userImg} alt={alt} />
            </div>
            <div className="content">
              <div className="recipe__title font-size-18">{title}</div>
              <div className="rating font-size-16 ">
                <Rating value={rate} edit={false} />
                <div className="numberOfRating ">{numberOfRaters} Rating</div>
              </div>

              <div className="recipe__By font-size-14">
                RECIPE BY <span>{name}</span>
              </div>
              <div className="recipe__date font-size-14">
                posted <span>{date}</span>
              </div>
            </div>
          </div>

          <div className="recipe__actions">
            <div className="icons-container">
              <button className="heart" onClick={() => toggleLiked(id, liked, setLiked)}>
                {liked && <FaHeart fill="white" size="1.15em" />}
                {!liked && <FaRegHeart fill="white" size="1.15em" />}
              </button>

              <button
                className="bookmark"
                onClick={() => toggleReadLater(id, readLater, setReadLater)}
              >
                {readLater && <FaBookmark fill="white" size="1.15em" />}
                {!readLater && <FaRegBookmark fill="white" size="1.15em" />}
              </button>
            </div>

            <div className="button-container">
              <Button primary rounded onClick={() => router.push(`/recipes/${id}`)}>
                Read More
              </Button>
            </div>
          </div>
        </div>
        {isNew && <New />}
      </div>
    </Styles>
  );
};

export default RecipeItem;
