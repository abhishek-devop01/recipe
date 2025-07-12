import { createContext, useState } from "react";
export const recipeContext = createContext(null);
const RecipeContext = (props) => {
  const [data, setdata] = useState([
    {
      id: 1,
      title: "Classic Margherita Pizza",
      ingr: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      inst: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ],
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      chef: "brocode",
      category: "dinner",
      desc: "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
    },
  ]);

  return (
    <recipeContext.Provider value={{ data, setdata }}>
      {props.children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;
