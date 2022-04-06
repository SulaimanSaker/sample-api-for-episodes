import React from "react";
import { Styles } from "./styles";
import { details } from "./data";
import { Rating } from "components/atoms";
import { AccordionWithCheck, Avatar } from "components/molecules";

const RecipeContent = () => {
  const { recipeBy, ingredients, steps } = details;
  return (
    <Styles>
      <section className="recipe-content">
        <div className="recipe__info">
          <div className="recipe_details">
            <Avatar src={recipeBy.img} alt={recipeBy.name} />
            <div>
              <div className="recipe__title font-size-18">{recipeBy.title}</div>
              <div className="rating font-size-16">
                <Rating value={recipeBy.rate} edit={false} />
              </div>

              <div className="recipe__By font-size-16">
                RECIPE DONE BY <span>{recipeBy.name}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="ingredients_section font-size-18 ">
          <div>Ingredients</div>
          <ol>
            {ingredients.map((item, index) => (
              <li className="font-size-16" key={index}>
                {item}
              </li>
            ))}
          </ol>
        </div>
        <div className="directions_section ">
          <div className="font-size-18 main__title">Directions:</div>
          <AccordionWithCheck data={steps} />
        </div>
      </section>
    </Styles>
  );
};

export default RecipeContent;
