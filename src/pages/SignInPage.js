import React from "react";

const SignInPage = () => {
  return (
    <div>
      <b>You are not logged in</b>
      <a href="https://calculator.auth.eu-west-1.amazoncognito.com/login?response_type=code&client_id=5s0821ekobplt0cti08dme3ced&redirect_uri=https://d2ks7vcdohitbk.cloudfront.net/welcome/">
        {/* <a href="https://calculator.auth.eu-west-1.amazoncognito.com/login?response_type=code&client_id=5s0821ekobplt0cti08dme3ced&redirect_uri=http://localhost:4000/welcome/"> */}
        Sign in
      </a>
    </div>
  );
};

export default SignInPage;
