import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-x-15 text-xl font-semibold mb-10">
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
      <NavLink
        className={` px-6 py-1 rounded-full bg-emerald-800 ${(e) => e.isActive ? "text-emerald-800" : ''}`}
        to={"/create-recipe"}
      >
        Create Recipes
      </NavLink>
    </div>
  );
};

export default Navbar;
