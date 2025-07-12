import  { useContext } from "react";
import {  Navigate, useNavigate, useParams } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipeContext);
  const params = useParams();

  const recipe = data.find((recipe) => params.id == recipe.id);


  const navigate = useNavigate()
  

  const { register, handleSubmit, reset } = useForm({defaultValues: {
     title: recipe.title,
     chef: recipe.chef,
     image:recipe.image,
     inst:recipe.inst,
     ingr:recipe.ingr,
     desc:recipe.desc,
     category:recipe.category,
  }});
  const submitHandler = (recipe) => {
     const index = data.findIndex((recipe)=> params.id == recipe.id)
     const copydata = [...data]
     copydata[index] =  {...copydata[index], ...recipe}
     setdata(copydata)   
     toast.success('Recipe Updated!')  
    
  };

  const deleteHandler = ()=>{
     const filterdata = data.filter((r)=> r.id != params.id)
     setdata(filterdata)
     toast.success("Recipe Deleted!")
     navigate('/recipes')
  }

  return recipe ? (
    <div className="flex items-center justify-between  ">
      <div className="w-1/2">
        <h1 className="text-2xl font-black">{recipe.title}</h1>
        <img className="w-[15vw] block object-fit" src={recipe.image} alt="" />
        <h1 className="text-2xl font-black">chef name - {recipe.chef}</h1>
        <p className="w-1/2"> <span className="font-black">Descrition -</span>  {recipe.desc}</p>
        <p className="w-1/2"> <span className="font-black">Instuction -</span>  {recipe.inst}</p>

      </div>
      <form className="w-1/2 p-2" onSubmit={handleSubmit(submitHandler)}>
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
          <option className="text-black" value="lunch">
            Lunch
          </option>
          <option className="text-black" value="supper">
            Supper
          </option>
          <option className="text-black" value="dinner">
            Dinner
          </option>
        </select>
        <button className="block mt-5 bg-emerald-800 text-white px-4 py-1 rounded">
          Update 
        </button>
        <button onClick={deleteHandler} className="block mt-5 bg-red-600 text-white px-4 py-1 rounded">
          Delete 
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
