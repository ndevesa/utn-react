import { auth } from "../../firebase";

function Logout({ setUser }) {
  const signOut = () => {
    auth
      .signOut()
      .then(() => setUser(null))
      .catch((err) => console.error(err));
  };

  return <button onClick={signOut}>Logout</button>;
}

export default Logout;
