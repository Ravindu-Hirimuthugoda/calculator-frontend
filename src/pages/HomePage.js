import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import MainHeader from "../component/MainHeader";
import axios from "axios";

const HomePage = () => {
  const [user, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get("https://2a67uxwzf2.execute-api.eu-west-1.amazonaws.com/dev/user")
      .then((res) => res.data)
      .then((res) => {
        setUserData(res);
        localStorage.setItem("userType", res.result.role_name);
      });
  }, []);
  return (
    <Fragment>
      {user ? (
        <>
          <header>
            <MainHeader userType={user.result.role_name} />
          </header>
          <div>
            <p>Welcome to the site {user.result.user_name}!</p>
          </div>
        </>
      ) : null}
    </Fragment>
  );
};

export default HomePage;
