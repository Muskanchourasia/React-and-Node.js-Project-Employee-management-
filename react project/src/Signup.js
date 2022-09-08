import React from "react";
import { useState } from "react";
import { withRouter } from "react-router";
import { Button, Select, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "./App.css";

const { Option } = Select;

function SignupUi(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [mob_no, setNumber] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [salary, setSalary] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (value) => {
    setRole(value);
  };

  function handleClick() {
    let data = {
      username,
      email,
      gender,
      mob_no,
      role,
      address,
      salary,
      password,
    };
    fetch("http://localhost:4000/user/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => result.json());

    if (
      username !== "" &&
      email !== "" &&
      gender !== "" &&
      mob_no !== "" &&
      role !== "" &&
      address !== "" &&
      salary !== "" &&
      password !== ""
    )
      props.history.push("/loginUi");
  }
  function handleClick1() {
    props.history.push("/loginUi");
  }

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <h1>SignUp Page</h1>

          <div>
            <label className="form-label" htmlFor="Username">
              Username
            </label>
            <br />
            <Input
              size="large"
              prefix={<UserOutlined />}
              type="text"
              placeholder="Enter your first name"
              className="name"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <br />

          <div>
            <label className="form-label" htmlFor="Email">
              Email address:
            </label>
            <br />
            <Input
              size="large"
              type="text"
              placeholder="Enter your ID or email"
              className="name"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <br />

          <div>
            <label className="form-label" htmlFor="Gender">
              Gender
            </label>
            <br />
            <Input
              size="large"
              type="text"
              placeholder="Enter your gender"
              className="name"
              onChange={(event) => setGender(event.target.value)}
            />
          </div>
          <br />

          <div>
            <label className="form-label" htmlFor="Number">
              Mobile no.:
            </label>
            <br />
            <Input
              size="large"
              type="number"
              placeholder="Enter your mobile no."
              className="name"
              onChange={(event) => setNumber(event.target.value)}
            />
          </div>
          <br />

          {/* <div>
            <label className="form-label" htmlFor="Role">
              Role:
            </label>
            <br />
            <select onChange={(event) => setRole(event.target.value)}>
              <option disabled style={{ display: "none" }} selected>
                Select Role
              </option>
              <option value="junior">junior</option>
              <option value="senior">senior</option>
              <option value="lead">lead</option>
            </select>
          </div> */}

          <div>
            <label> Role: </label>
            <br />
            <Select
              defaultValue="Select Role"
              style={{
                width: 250,
              }}
              onChange={handleChange}
            >
              <Option value="junior">junior</Option>
              <Option value="senior">senior</Option>
              <Option value="lead">lead</Option>
            </Select>
          </div>
          <br />
          <div>
            <label className="form-label" htmlFor="Address">
              Address
            </label>
            <br />
            <Input
              size="large"
              type="text"
              placeholder="Enter your address"
              className="name"
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <br />

          <div>
            <label className="form-label" htmlFor="Salary">
              Salary
            </label>
            <br />
            <Input
              size="large"
              type="text"
              placeholder="Enter your Salary"
              className="name"
              onChange={(event) => setSalary(event.target.value)}
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
              type="password"
              placeholder="Enter your password"
              className="name"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <br />

          <div className="Submit-button">
            <Button
              style={{
                width: 260,
              }}
              type="primary"
              shape="round"
              onClick={handleClick}
            >
              Sign Up
            </Button>
          </div>
          <br />
          <div className="Submit">
            <Button
              style={{
                width: 260,
              }}
              type="primary"
              shape="round"
              onClick={handleClick1}
            >
              {" "}
              Already have an account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(SignupUi);
