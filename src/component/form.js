import React, { useState } from "react";
import "./form.css";
import axios from "axios";

function Form(props) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const numberHandler1 = (event) => {
    setNum1(event.target.value);
  };

  const numberHandler2 = (event) => {
    setNum2(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    console.log(num1);
    console.log(num2);
    let body = {
      num1: parseInt(num1),
      num2: parseInt(num2),
    };
    axios
      .post(props.url, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data)
      .then((res) => setResult(res.result));
  };
  return (
    <form onSubmit={formHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="num1">Number 1</label>
          <input type="text" id="num1" onChange={numberHandler1} />
        </div>
        <div className="form-control">
          <label htmlFor="num2">Number 2</label>
          <input type="text" id="num2" onChange={numberHandler2} />
        </div>
        <div className="form-control">
          <div className="form-actions">
            <button>Calculate</button>
          </div>
        </div>
        {console.log(result)}
        {result !== null ? (
          <div className="form-control">
            <label htmlFor="result">Result:</label>
            <label htmlFor="value">{result}</label>
          </div>
        ) : null}
      </div>
    </form>
  );
}

export default Form;
