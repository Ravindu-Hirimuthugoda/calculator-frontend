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
        <Form url="/dev/division" />
      </div>
    </Fragment>
  );
}

export default DivisionPage;
