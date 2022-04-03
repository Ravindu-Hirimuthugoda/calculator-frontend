import React, { Fragment } from "react";
import Form from "../component/form";
import MainHeader from "../component/MainHeader";

function DivisionPage(props) {
  return (
    <Fragment>
      <header>
        <MainHeader userType={localStorage.getItem("userType")} />
      </header>
      <div>
        <Form url="https://2a67uxwzf2.execute-api.eu-west-1.amazonaws.com/dev/division" />
      </div>
    </Fragment>
  );
}

export default DivisionPage;