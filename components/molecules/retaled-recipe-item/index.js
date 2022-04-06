import React, { useState } from "react";

import { useRouter } from "next/router";

import { FaRegHeart, FaRegBookmark, FaHeart, FaBookmark } from "react-icons/fa";

import { Image, Button } from "components/atoms";

import { Styles } from "./styles";

const RelatedRecipeItem = ({
  id,
  src,
  alt,
  title,
  recipeBy,
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
          <Image width="100%" src={src} alt={alt} />
        </div>

        <div className="recipe__info">
          <div className="recipe__title font-size-16">{title}</div>

          <div className="recipe__by font-size-14">
            RECIPE BY <span>{recipeBy}</span>
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
                View Recipe
              </Button>
            </div>
          </div>
        </div>

        {isNew && <div className="new">New</div>}
      </div>
    </Styles>
  );
};

export default RelatedRecipeItem;
