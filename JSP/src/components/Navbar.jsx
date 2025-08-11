import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="bg-slate-800 text-white p-4 shadow-md">
      <ul className="flex space-x-6 justify-center">
        <li>
          <Link to="/" className="hover:text-slate-300">Home</Link>
        </li>
        <li>
          <Link to="/courses" className="hover:text-slate-300">Courses</Link>
        </li>
        <li>
          <Link to="/centers" className="hover:text-slate-300">Centers</Link>
        </li>
        <li>
            <Link to="/about" className="hover:text-slate-300">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-slate-300">Contact</Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
