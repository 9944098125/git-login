import React from "react";

import "./styles.css";

export default function Login() {
  const loginWithGitHub = () => {
    // Redirect to GitHub OAuth login page
    window.location.href = `https://github.com/login/oauth/authorize?client_id=5e01e9b25b54a4383820`;
  };

  return (
    <React.Fragment>
      <div className="login-bg d-flex justify-content-center align-items-center">
        <button onClick={loginWithGitHub} className="btn btn-primary">
          Login With Github
        </button>
      </div>
    </React.Fragment>
  );
}
