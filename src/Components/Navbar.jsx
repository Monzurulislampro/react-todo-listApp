import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
       <div> <div className="navbar bg-base-100 -ml-6">
       <div className="flex-1">
         <a className="btn btn-ghost text-xl">Monzurul's Todo App</a>
       </div>
       <div className="flex-none">
         <ul className="menu menu-horizontal px-1 gap-4 text-bold">
           <li><NavLink to="/create">Create</NavLink></li>
           <li><NavLink to="/">Todos</NavLink></li>
         </ul>
       </div>
     </div></div>
    );
};

export default Navbar;