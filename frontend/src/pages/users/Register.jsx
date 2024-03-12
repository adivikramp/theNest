import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/Alert";
import { registerUser } from "../../controllers/usersController";
import { UserContext } from "../../contexts/UserContext";

export default function Register() {
  // Use User Context
  const { setUser } = useContext(UserContext);

  // Use navigate Hook
  const navigate = useNavigate();

  //Error State
  const [error, setError] = useState(null);

  // Form data state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle Input
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // Register the user
      await registerUser(
        formData.email,
        formData.password,
        formData.confirmPassword
      );
      // Update the user state
      setUser({
        email: formData.email,
        orders: [],
        feedbacks: [],
      });
      // Navigate to dashboard
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <section className="relative mx-auto w-full max-w-md bg-white my-16 px-6 pt-10 pb-8 shadow-2xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">Register</h1>
          <p className="mt-2 text-gray-500">Register your account</p>
        </div>
        <div className="mt-5">
          <form onSubmit={handleSubmit}>
            <div className="relative mt-6">
              <input
                type="email"
                name="email"
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInput}
                autoFocus
              />
              <label
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                htmlFor="email"
              >
                Email
              </label>
            </div>

            <div className="relative mt-6">
              <input
                type="password"
                name="password"
                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                placeholder="Password"
                value={formData.password}
                onChange={handleInput}
              />
              <label
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                htmlFor="password"
              >
                Password
              </label>
            </div>

            <div className="relative mt-6">
              <input
                type="password"
                name="confirmPassword"
                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInput}
              />
              <label
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                htmlFor="password"
              >
                Confirm Password
              </label>
            </div>

            <div className="my-6">
              <button className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      {error && <Alert msg={error} />}
    </section>
  );
}
