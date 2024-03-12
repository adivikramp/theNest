import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import "./Layout.css";

export default function Layout() {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    if (confirm("Confirm Logout")) {
      setUser({ email: null, orders: [], feedbacks: [] });
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      navigate("/");
    }
  };

  return (
    <>
      <nav className="navbar h-1/5 text-white left-0 right-0">
        <Link to="/" className="flex items-center nav-branding">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2a10 10 0 0 1 10 10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2A10 10 0 0 1 12 2m0 6a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m5 4a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2M7 12a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m8 3l1.27 4.45l.08.55c0 1.1-.9 2-2 2h-4.7a2 2 0 0 1-2-2l.08-.55L9 15h6Z"
            />
          </svg>
          <span className="mx-4">The Nest</span>
        </Link>

        {user.email ? (
          <ul className="nav-menu">
            <li className="nav-item mx-4">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/plantkingdom" className="nav-link">
                PRODUCTS
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/order" className="nav-link">
                Order
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/feedback" className="nav-link">
                Feedback
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/dashboard" title="Dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link title="Logout" className="nav-link" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="nav-menu">
            <li className="nav-item mx-4">
              <Link to="/" className="nav-link" title="Home">
                HOME
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/plantkingdom" title="Products" className="nav-link">
                PRODUCTS
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/login" title="Login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/register" title="Resgiter" className="nav-link">
                Register
              </Link>
            </li>
          </ul>
        )}
      </nav>

      <Outlet />
    </>
  );
}
