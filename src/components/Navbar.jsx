import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    
      <div className="flex justify-between  text-xl mb-10">
        <h1>Yummio</h1>
        <div className="flex justify-between items-center gap-x-15 text-xl font-normal ">
          <NavLink
            className={(e) => (e.isActive ? "text-emerald-800" : "")}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-emerald-800" : "")}
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-emerald-800" : "")}
            to={"/recipes"}
          >
            Recipes
          </NavLink>
        </div>
        <div className="font-normal">
          <NavLink
            className={` px-6 py-1 rounded-full bg-emerald-800 ${(e) =>
              e.isActive ? "text-emerald-800" : ""}`}
            to={"/create-recipe"}
          >
            Create Recipes
          </NavLink>
        </div>
      </div>
     
   
  );
};

export default Navbar;
