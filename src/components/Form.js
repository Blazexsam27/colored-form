import React, { useState } from "react";
import "./form.css";

export default function Form(props) {
  return (
    <>
      <div className="customContainer">
        <div
          className="formContainer"
          style={{
            color: props.color,
            backgroundColor: props.bgColor,
          }}
        >
          <div className="inputFieldContainer">
            <ul>
              <li className="formHeading">SignUp</li>
              <li>
                <label htmlFor="username">
                  Username
                  <input
                    type="text"
                    className="inputField my-1"
                    id="username"
                  />
                </label>
              </li>
              <li>
                <label htmlFor="Email">
                  Email Id
                  <input type="email" className="inputField my-1" id="Email" />
                </label>
              </li>
              <li>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    className="inputField my-1"
                    id="password"
                  />
                </label>
              </li>

              <li>
                <button className="submitBtn my-2">submit</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
