import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/";

const initialLoginData = {
  username: "",
  password: "",
};

//JSON.parse(localStorage.getItem(key))

export default function Login() {
  let history = useHistory();
  const [loginData, setLoginData] = useState(initialLoginData);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9000/api/login", loginData)
      .then((res) => {
        console.log(res);

        localStorage.setItem("token", res.data.token);
        history.push("/friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeFunc = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="login-div">
      <h1>LOGIN</h1>
      <div className="input-flex">
        <label className="text-bold" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          name="username"
          size="50"
          className="input-box"
          onChange={onChangeFunc}
        />
      </div>
      <div className="input-flex">
        <label className="text-bold" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="text"
          id="password"
          name="password"
          size="50"
          className="input-box"
          onChange={onChangeFunc}
        />
      </div>
      <button className="text-bold">SUBMIT</button>
    </form>
  );
}
