import { useContext } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";
import LabelInput from "../components/LabelInput";

export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username: e.target.username.value,
      password: e.target.password.value,
      full_name: e.target.name.value,
      email: e.target.email.value,
      dob: e.target.dob.value,
      gender: e.target.gender.value,
    };

    const user = await createUser(userData);
    setCurrentUser(user);
    navigate(`/profile-pic/${user.id}`);
  };

  if (currentUser) {
    console.log(currentUser);
    return <Navigate to="/" />;
  }

  return (
    <section className="flex bg-gray-50 dark:bg-gray-900">
      <div className="w-1/2">
        <img
          src="https://ucarecdn.com/3d22543a-b530-48a6-838a-13443ebaf6dc/-/crop/736x834/0,270/-/preview/3000x3000/" alt="Login image"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="px-6 py-8 md:px-0 md:w-full lg:max-w-md">
          <div className="bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 bg-blue-400">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <LabelInput
                  htmlFor="name"
                  label="Name"
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  required
                />

                <LabelInput
                  htmlFor="email"
                  label="Email"
                  type="email"
                  id="email"
                  placeholder="name@company.com"
                  required
                />

                <LabelInput
                  htmlFor="username"
                  label="Username"
                  type="text"
                  id="username"
                  placeholder="Username"
                  required
                />

                <LabelInput
                  htmlFor="password"
                  label="Password"
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                />

                <div>
                  <label
                    htmlFor="Gender"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option defaultValue>Select your Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="NA">Prefer Not To Say</option>
                  </select>
                </div>

                <LabelInput
                  htmlFor="dob"
                  label="Date of Birth"
                  type="date"
                  id="dob"
                  required
                />

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <Link
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
