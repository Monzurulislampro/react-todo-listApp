
const Navbar = () => {
    return (
       <div> <div className="navbar bg-base-100 -ml-6">
       <div className="flex-1">
         <a className="btn btn-ghost text-xl">Monzurul's Blog App</a>
       </div>
       <div className="flex-none">
         <ul className="menu menu-horizontal px-1">
           <li><a>Blogs</a></li>
           <li>
             <details>
               <summary>
                 Menu
               </summary>
               <ul className="p-2 bg-base-100">
                 <li><a>Signup</a></li>
                 <li><a>Login</a></li>
               </ul>
             </details>
           </li>
         </ul>
       </div>
     </div></div>
    );
};

export default Navbar;