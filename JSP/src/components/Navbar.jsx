import { NavLink } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="bg-blue-200   shadow-md flex text-lg gap-3 font-medium h-10 items-center ">
      <NavLink to="/" className={({ isActive }) => isActive ? "text-purple-700" : "text-white" }>
       <div className='text-2xl text-red-700 font-extrabold italic  '>JSP</div>
      </NavLink>
      <NavLink to="/courses" className={({ isActive }) => isActive ? "text-green-700" : "text-violet-800" }>Courses</NavLink>
      <NavLink to="/centers" className={({ isActive }) => isActive ? "text-green-700" : "text-violet-800" }>Centers</NavLink>
      <NavLink to='/about' className={({ isActive }) => isActive ? "text-green-700" : "text-violet-800" }>
        About
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? "text-green-700" : "text-violet-800" }>Contact</NavLink>
    </nav>
  );
}

export default Navbar;
