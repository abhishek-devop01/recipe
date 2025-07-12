import { useContext } from "react"
import { recipeContext } from "../context/RecipeContext"
import RecipeCard from "../components/RecipeCard"

const Recipes = () => {
  const {data} = useContext(recipeContext)
  const renderRecipe = data.map((recipe)=> (
   <RecipeCard key={recipe.id} recipe={recipe} />
  ))
  return (
    <div className="flex flex-wrap">{data.length > 0 ? renderRecipe: "no recipe found"}</div>
  )
}
export default Recipes