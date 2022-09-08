import React, { useEffect } from "react";
import { useState } from "react";
import { withRouter } from "react-router";
import { Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

function LoginUi(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    localStorage.setItem("token", "");
  }, []);

  function handleClick() {
    let data = {
      email,
      password,
    };
    console.log(data);
    fetch(" http://localhost:4000/user/login ", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => result.json())
      .then((res) => localStorage.setItem("token", JSON.stringify(res.token)));

    if (
      localStorage.getItem("token") !== "" &&
      localStorage.getItem("token") !== "undefined"
    ) {
      props.history.push("/dashboard");
    }
  }

  return (
    <div className="main1">
      <div>
        <div>
          <h1>Login Page</h1>
          <div>
            <label className="form-label" htmlFor="Email">
              Email address:
            </label>
            <br />

            <Input
              size="large"
              prefix={<UserOutlined />}
              type="text"
              placeholder="Enter your used ID or email"
              className="name"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <br />
          <div className="second-input">
            <label className="form-label" htmlFor="password">
              Password:
            </label>
            <br />
            <Input
              size="large"
              prefix={<UserOutlined />}
              type="password"
              placeholder="Enter your password"
              className="name"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <br />
          <div className="login-button">
            <Button
              type="primary"
              shape="round"
              style={{
                width: 260,
              }}
              onClick={handleClick}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(LoginUi);
