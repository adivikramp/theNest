import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-cyan-900 p-8 text-white">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <NavLink to="/">
          <div className="flex items-center">
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
            <Typography
              as="a"
              className="text-5xl mx-4 font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              The Nest
            </Typography>
          </div>
        </NavLink>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <NavLink to="/">
              <Typography
                as="a"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Home
              </Typography>
            </NavLink>
          </li>
          <li>
            <NavLink to="/plantkingdom">
              <Typography
                as="a"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Products
              </Typography>
            </NavLink>
          </li>
          <li>
            <NavLink to="/order">
              <Typography
                as="a"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Order
              </Typography>
            </NavLink>
          </li>
          <li>
            <NavLink to="/feedback">
              <Typography
                as="a"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Feedback
              </Typography>
            </NavLink>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography className="text-center font-normal">
        &copy; 2022 The Nest
      </Typography>
    </footer>
  );
}
