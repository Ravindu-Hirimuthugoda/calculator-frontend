import React from "react";
import { useHistory } from "react-router-dom";

function SignOutPage(props) {
  const history = useHistory();
  localStorage.setItem("access_token", "undefined");
  localStorage.setItem("id_token", "undefined");
  localStorage.setItem("userType", "undefined");
  history.replace("/");
  return <div></div>;
}

export default SignOutPage;
