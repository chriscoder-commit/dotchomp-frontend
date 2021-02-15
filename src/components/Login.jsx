import React, { useState } from "react";
import { LoggedOutNavBar } from "./LoggedOutNavBar";


export const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  async function onFormSubmit(event) {
    event.preventDefault();
    const body = {
      auth: { email, password },
    };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/auth/sign-in`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      if (response.status >= 400) {
        throw new Error("incorrect credentials");
      } else {
        const { jwt, moderator } = await response.json();
        localStorage.setItem("token", jwt);
        if (moderator) {
          localStorage.setItem("moderator", moderator);
        }
        history.push("/");
      }
    } catch (err) {
      setErrMessage(err.message);
    }
  }

  return (
    <>
    <LoggedOutNavBar />
      {errMessage && <span>{errMessage}</span>}
      <div>
        <form onSubmit={onFormSubmit} className="alignment">
          <label htmlFor="email">Email</label>
          <input
            className="alignment"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            className="alignment"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" value="Login" variant="secondary">Login</button>
        </form>
      </div>
    </>
  )
}