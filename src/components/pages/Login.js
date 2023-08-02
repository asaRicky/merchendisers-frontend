import React, { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((r) => r.json())
      .then(onLogin);
  }

  return (
    <div className="container">
      <form className="form_container" onSubmit={handleSubmit}>
        <div className="logo_container"></div>
        <div className="title_container">
          <p className="title">Login to your Account</p>
          <span className="subtitle">
            Get started with our app, just create an account and enjoy the
            experience.
          </span>
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="username">
            Email
          </label>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            {/* SVG path for email icon */}
          </svg>
          <input
            placeholder="name@mail.com"
            title="Input title"
            name="input-name"
            type="text"
            className="input_field"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="password">
            Password
          </label>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            {/* SVG path for password icon */}
          </svg>
          <input
            placeholder="Password"
            title="Input title"
            name="input-name"
            type="password"
            className="input_field"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="sign-in_btn">
          <span>Sign In</span>
        </button>
        <div className="separator">
          <hr className="line" />
          <span>Or</span>
          <hr className="line" />
        </div>
        <button title="Sign In" type="submit" className="sign-in_ggl">
          <svg
            height="18"
            width="18"
            viewBox="0 0 32 32"
          >
            {/* SVG path for Google sign-in */}
          </svg>
          <span>Sign In with Google</span>
        </button>
        <button title="Sign In" type="submit" className="sign-in_apl">
          <svg
            preserveAspectRatio="xMidYMid"
            version="1.1"
            viewBox="0 0 256 315"
            height="20px"
            width="16px"
          >
            {/* SVG path for Apple sign-in */}
          </svg>
          <span>Sign In with Apple</span>
        </button>
        <p className="note">Terms of use & Conditions</p>
      </form>
    </div>
  );
}

export default Login;
