import React, { Fragment } from "react";
import Form from "../component/form";
import MainHeader from "../component/MainHeader";

function AdditionPage(props) {
  return (
    <Fragment>
      <header>
        <MainHeader userType={localStorage.getItem("userType")} />
      </header>
      <div>
        <Form url="/dev/addition" />
      </div>
    </Fragment>
  );
}

export default AdditionPage;
