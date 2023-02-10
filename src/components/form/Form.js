import React, { useState } from "react";

const FormValidation = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    let formErrors = {};
    if (!username) {
      formErrors.username = "Username is required";
    }
    if (!email) {
      formErrors.email = "Email is required";
    }
    if (!password) {
      formErrors.password = "Password is required";
    }
    if (isAdmin) {
      if (!username.endsWith("_admin")) {
        formErrors.username = "Admin username must end with _admin";
      }
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    console.log("Form submitted successfully!");
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          className="border border-gray-400 p-2 rounded-lg"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        {errors.username && (
          <p className="text-red-500 text-xs italic">{errors.username}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border border-gray-400 p-2 rounded-lg"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">{errors.email}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input type="password" id="password" className="" />
      </div>
    </form>
  );
};
export default FormValidation;
