import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from "./home";
import Login from "../Login/login";

export const Dashboard = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return <div className="">{user ? <Home /> : <Login />}</div>;
};
