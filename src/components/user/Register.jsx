import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Register() {
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user.email;
        setError(null);
        console.log(user);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMsg = err.message;
        setError(errorMsg);
        console.error(errorCode);
      });
  };

  return (
    <>
      <h3 className="mb-4">Register</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control"
            id="RegisterEmail"
            name="email"
            placeholder="E-mail"
          />
          {error && <small className="d-block mt-2 text-danger">{error}</small>}
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            id="RegisterPassword"
            name="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn-dark">
          Sign up
        </button>
      </form>
    </>
  );
}

export default Register;
