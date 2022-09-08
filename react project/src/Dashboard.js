import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "./redux/features/userSlice";
import { Card } from "antd";
import { Button, Select } from "antd";

const { Option } = Select;

function Dashboard(props) {
  const text = useSelector((state) => state.user.users);
  const [Role, setRole] = useState("");
  const dispatch = useDispatch();
  const handleChange = (value) => {
    setRole(value);
  };

  useEffect(() => {
    fetch("http://localhost:4000/user/", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.users);
        dispatch(userData(res.users));
      });
  }, []);

  const handleClick = (id) => {
    fetch(` http://localhost:4000/user/del/${id} `, {
      method: "DELETE",
      headers: { Authorization: JSON.parse(localStorage.getItem("token")) },
    }).then((result) => result.json);
  };

  const handleClick1 = (id) => {
    props.history.push({ pathname: "/EditUi", state: { id: id } });
  };

  const handleClick2 = () => {
    fetch(`http://localhost:4000/user/filter/${Role}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(userData(res.users));
      });
  };
  return (
    <div>
      <form>
        <label htmlFor="Role"> </label>

        <Select
          defaultValue="Select Role"
          style={{
            width: 400,
            textAlign: "center",
          }}
          onChange={handleChange}
          size="large"
        >
          <Option disabled style={{ display: "none" }} Selected></Option>
          <Option value="junior">junior</Option>
          <Option value="senior">senior</Option>
          <Option value="lead">lead</Option>
        </Select>
        {Role !== "" && (
          <Button type="primary" size="large" onClick={handleClick2}>
            Filter
          </Button>
        )}

        {/* <select
          style={{
            width: 250,
          }}
          onChange={(event) => setRole(event.target.value)}
          id="Role"
          name="Role"
          placeholder="Role"
        >
          <option disabled style={{ display: "none" }} selected>
            Select Role
          </option>
          <option value="senior">senior</option>
          <option value="junior">junior</option>
          <option value="lead">lead</option>
        </select>
        {Role !== "" && (
          <Button type="primary" onClick={handleClick2}>
            Filter
          </Button>
        )} */}
      </form>

      <div>
        {text.map((item, index) => (
          <Card key={index} className="main2" title="Employee Details">
            <p>Username: {item.username}</p>
            <p>Email: {item.email}</p>
            <p>Role: {item.role}</p>
            <p>Address: {item.address}</p>
            <p>Salary :{item.salary}</p>
            <Button
              type="danger"
              size="large"
              value={index}
              onClick={() => handleClick(item._id)}
            >
              DELETE
            </Button>

            <Button
              type="primary"
              size="large"
              value={index}
              onClick={() => handleClick1(item._id)}
            >
              Edit Details
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
