import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc, chef } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className="duration-500 hover:scale-105 mr-3 ml-3 block w-[23vw] rounded overflow-hidden p-1 shadow-2xl"
    >
      <img className="object-cover w-full h-[20vh] " src={image} alt="" />
      <h1 className="px-2 mt-2 font-black">{title}</h1>
      <small className="px-2 mt-2 text-emerald-700 text-xl font-black">
        {chef}
      </small>
      <p className="px-2 mt-2 pb-3">
        {desc.slice(0, 100)}... <small className="text-blue-400">More</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
