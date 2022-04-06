import React, { useState } from "react";

import classNames from "classnames";

import { HiOutlineShare } from "react-icons/hi";
import { VscGift } from "react-icons/vsc";

import { AnimatedButton, Button, Image, Rating } from "components/atoms";
import { ColorCircles, QTYController } from "components/molecules";

import { Styles } from "./styles";

const defaultColors = [
  { key: "1", value: "black", selected: true },
  { key: "2", value: "#eb5656" },
  { key: "3", value: "#6bd3ed" },
];

const defaultSizes = [
  { key: "1", value: "XS" },
  { key: "2", value: "S" },
  { key: "3", value: "M", selected: true },
  { key: "4", value: "L", selected: true },
  { key: "5", value: "XL" },
  { key: "6", value: "XXL" },
];

const ItemInfoOptions = () => {
  const [rating, setRating] = useState(0);
  const [colors, setColors] = useState([...defaultColors]);
  const [sizes, setSizes] = useState([...defaultSizes]);
  const [qty, setQty] = useState(1);

  const handleColorClick = (key) => {
    const newColors = colors.map((color) => ({ ...color, selected: false }));
    const index = newColors.findIndex((color) => color.key === key);
    newColors[index] = { ...newColors[index], selected: !newColors[index].selected };
    setColors(newColors);
  };

  const handleSizeClick = (key) => {
    const newSizes = [...sizes];
    const index = newSizes.findIndex((color) => color.key === key);
    newSizes[index] = { ...newSizes[index], selected: !newSizes[index].selected };
    setSizes(newSizes);
  };

  const onRatingChange = (newValue) => {
    setRating(newValue);
  };

  return (
    <Styles>
      <div className="item-info-options">
        <div className="logo-container">
          <Image src="/images/temp/item/logo.png" className="logo" />
        </div>

        <div className="name-title-rating">
          <div className="name">Ralph Lauren</div>

          <div className="title-rating">
            <div className="title">Baby Coat Your Title Here</div>

            <div className="rating">
              <Rating value={rating} onChange={onRatingChange} />
            </div>
          </div>
        </div>

        <div className="prices">
          <div className="old-price">
            <sup>$</sup>70.99
          </div>

          <div className="new-price">
            <sup>$</sup>29.95
          </div>
        </div>

        <p className="info">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
          auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
          nibh vulputate cursus a sit
        </p>

        <div className="label-value color">
          <div className="label">Color:</div>

          <div className="value">Black</div>
        </div>

        <div className="color-circles-container">
          <ColorCircles colors={colors} onColorClick={handleColorClick} />
        </div>

        <div className="size">
          <div className="label-value">
            <div className="label">Size:</div>
            <div className="available-sizes">
              {sizes.map(({ key, value, selected }) => (
                <span
                  role="presentation"
                  key={key}
                  className={classNames({ selected })}
                  onClick={() => handleSizeClick(key)}
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          <AnimatedButton>Size Guide</AnimatedButton>
        </div>

        <div className="qty">
          <div className="label-value">
            <div className="label">QTY:</div>

            <QTYController qty={qty} setQty={setQty} />
          </div>

          <div className="left-in-stock">Only 2 Left in Stock</div>
        </div>

        <div className="share">
          <div className="icon-text first-icon">
            <div className="icon">
              <HiOutlineShare size="1.5em" />
            </div>

            <div className="text">Share with a Friend</div>
          </div>

          <div className="icon-text">
            <div className="icon">
              <VscGift size="1.5em" />
            </div>

            <div className="text">Add to Gift List</div>
          </div>
        </div>

        <Button primary big rounded block>
          Add to Cart
        </Button>
      </div>
    </Styles>
  );
};

export default ItemInfoOptions;
