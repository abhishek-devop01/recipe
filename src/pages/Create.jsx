import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate()
  const { data, setdata } = useContext(recipeContext);

  const { register, handleSubmit, reset } = useForm();
  const submitHandler = (recipe) => {
    recipe.id = nanoid();

    // const copydata = [...data]
    // copydata.push(recipe)
    // setdata(copydata)
    setdata([...data, recipe]);
    toast.success("New recipe create!")
    reset();
    navigate("/recipes")
  };
  return (
    <form
      onSubmit={
        handleSubmit(submitHandler)
      }
    >
      <input
        className="border-b outline-0 p-2 block"
        {...register("image")}
        type="url"
        placeholder="Paste image url..."
      />
      <small className="text-red-400">Error</small>
      <input
        className="border-b outline-0 p-2 block"
        {...register("chef")}
        type="text"
        placeholder="Chef Name..."
      />
      <input
        className="border-b outline-0 p-2 block"
        {...register("title")}
        type="text"
        placeholder="Title..."
      />
      <textarea
        className="border-b outline-0 p-2 block"
        {...register("desc")}
        type="text"
        placeholder="Description..."
      ></textarea>
      <textarea
        className="border-b outline-0 p-2 block"
        {...register("ingr")}
        type="text"
        placeholder="Ingredients..."
      ></textarea>
      <textarea
        className="border-b outline-0 p-2 block"
        {...register("inst")}
        type="text"
        placeholder="Instruction..."
      ></textarea>
      <select
        className="border-b outline-0 p-2 block"
        {...register("category")}
      >
        <option className="text-black" value="breakfast">
          Breakfast
        </option>
        <option className="text-black" value="Lunch">
          Lunch
        </option>
        <option className="text-black" value="Supper">
          Supper
        </option>
        <option className="text-black" value="Dinner">
          Dinner
        </option>
      </select>
      <button className="block mt-5 bg-emerald-800 text-white px-4 py-1 rounded">
        Save Recipes
      </button>
    </form>
  );
};

export default Create;
