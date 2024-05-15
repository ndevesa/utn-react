import { useEffect, useState } from "react";
import Login from "../components/user/Login";
import Logout from "../components/user/Logout";
import Register from "../components/user/Register";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="row border-bottom my-5">
        <div className="col">
          {user ? (
            <h1 className="display-6 text-center text-md-start">
              Welcome back <b>{user}</b>!
            </h1>
          ) : (
            <h1 className="display-6 text-center text-md-start">Welcome!</h1>
          )}
        </div>
      </div>

      <div className="row my-5 flex-column flex-md-row justify-content-center align-items-center m-4 m-md-0">
        {!user ? (
          <>
            <div className="col card border p-5">
              <Register setUser={setUser} />
            </div>
            <div className="col-1 text-center">
              <p>or</p>
            </div>
            <div className="col card border p-5">
              <Login setUser={setUser} />
            </div>
          </>
        ) : (
          <>
            <div className="col text-center">
              <button className="btn-dark">
                <Link to="/products">Go to products</Link>
              </button>
              <small className="d-block mt-3">Or</small>
              <div className="d-block mt-3 text-center">
                <Logout setUser={setUser} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default User;
