import { useRouter } from "next/router";
import React from "react";

export default function Login() {
  const router = useRouter();

  const [savedUser, setSavedUser] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const saveUser = (user) => {
    localStorage.setItem("name", user);
    router.push("/dashboard");
  };

  const cap = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const submit = (e) => {
    e.preventDefault();

    if (!user && !password) alert("Please fill out the form to login!");
    else if (!user) alert("Username is needed to login!");
    else if (!password) alert("Password is needed to login!");

    if (user && password) {
      if (user === "Andrew") {
        if (password !== "Admin")
          alert("Password for this username is incorrect.");
        if (password === "Admin") saveUser(user);
        //
      } else if (user === "Sales") {
        if (password !== "Sales")
          alert("Password for this username is incorrect.");
        if (password === "Sales") saveUser(user);
        //
      } else if (user === "Production") {
        if (password !== "Production")
          alert("Password for this username is incorrect.");
        if (password === "Production") saveUser(user);
      } else {
        if (user !== "Andrew") {
          alert("There is no account with this username.");
        } else if (user !== "Sales") {
          alert("There is no account with this username.");
        } else if (user !== "Production") {
          alert("There is no account with this username.");
        }
      }
    }
  };

  React.useEffect(() => {
    const loggedIN = localStorage.getItem("name");

    if (loggedIN !== "null") router.push("/dashboard");
    else setSavedUser(loggedIN);
  }, []);

  return (
    <div className="CENTER">
      <main className="form-signin">
        <form>
          <img
            style={{
              width: "320px",
              minWidth: "320px",
            }}
            src="/districPrintLogo.jpg"
            className="mb-4"
            alt="Distric Print Logo"
          />
          <h1 className="h2 fw-normal text-center">Login</h1>
          <input
            onChange={(e) => setUser(cap(e.target.value))}
            type="text"
            id="inputUsername"
            className="form-control mb-3 text-capitalize"
            placeholder="Username"
            required
            autoFocus
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          <button
            onClick={(e) => submit(e)}
            className="w-100 mt-3 btn btn-lg btn-primary"
            type="submit"
          >
            Enter
          </button>
        </form>
      </main>
    </div>
  );
}
