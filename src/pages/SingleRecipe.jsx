import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";

const SingleRecipe = () => {
  const { data } = useContext(recipeContext);
  const params = useParams();  
  const recipe = data.find((recipe) => params.id == recipe.id);
  console.log(recipe);
  
  return recipe ? (
     <div>
          <div>
               <h1>
                    {recipe.title}
               </h1>
               <img className="w-[20vw] block object-fit" src={recipe.image} alt="" />
          </div>
     </div>
  ) :( "Loading...")
};

export default SingleRecipe;
