import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Fill all fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      alert("Login Successful");
      navigate("/");
    }, 1000);
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>Welcome Back 👋</h1>

        <p>
          Login to your AI Job Portal account
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <label>
            <input
              type="checkbox"
              onChange={() =>
                setShowPassword(
                  !showPassword
                )
              }
            />
            Show Password
          </label>

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Logging In..."
              : "Login"}
          </button>

        </form>

        <div className="login-links">

          <Link to="/forgot-password">
            Forgot Password?
          </Link>

          <p>
            Don't have an account?{" "}
            <Link to="/register">
              Register
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}