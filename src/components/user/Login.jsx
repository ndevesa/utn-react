import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Login({ setUser }) {
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        setUser(userCredential.user.email);
        setError(null);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMsg = err.message;
        setError("Invalid credentials");
        console.error(errorCode);
      });
  };

  return (
    <>
      <h3 className="mb-4">Log in</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control"
            id="LoginEmail"
            placeholder="E-mail"
            name="email"
          />
          {error && <small className="d-block mt-2 text-danger">{error}</small>}
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            id="LoginPassword"
            placeholder="Password"
            name="password"
          />
        </div>
        <button type="submit" className="btn-dark">
          Log in
        </button>
      </form>
    </>
  );
}

export default Login;
