import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";

const LoadingPage = () => {
  const location = useLocation();
  const history = useHistory();
  const authCode = new URLSearchParams(location.search).get("code");
  if (authCode) {
    // axios({
    //   method: "post",
    //   url: "https://2a67uxwzf2.execute-api.eu-west-1.amazonaws.com/dev/auth",
    //   body: JSON.stringify(authCode),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    let token = JSON.stringify(authCode);
    console.log(token);
    axios
      .post(
        "https://2a67uxwzf2.execute-api.eu-west-1.amazonaws.com/dev/auth",
        token,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        console.log("access token is:");
        console.log(res.result["access_token"]);
        console.log("id token is:");
        console.log(res.result["id_token"]);
        localStorage.setItem("access_token", res.result["access_token"]);
        localStorage.setItem("id_token", res.result["id_token"]);
        history.replace("/home");
      });
    // .then((data) => {
    //   console.log("access token is:");
    //   console.log(data.result["access_token"]);
    //   console.log("id token is:");
    //   console.log(data.result["id_token"]);
    //   localStorage.setItem("access_token", data.result["access_token"]);
    //   localStorage.setItem("id_token", data.result["id_token"]);
    //   history.replace("/home");
    // });
  }
  return (
    <div>
      <h3>Loading ....</h3>
    </div>
  );
};

export default LoadingPage;
