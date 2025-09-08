import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "../context/AppContext";
import { FcGoogle } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import "./Login.css";

const Login = () => {
  const { setUser, setShowUserLogin, showUserLogin } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // 👇 Mock valid user (replace with Firebase auth later)
  const validUser = {
    email: "user@example.com",
    password: "sri123",
    name: "Praveena",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Trim whitespace and validate credentials
    if (email.trim() === "" || password.trim() === "") {
      setErrorMsg("Please enter both email and password.");
      return;
    }

    if (email !== validUser.email) {
      setErrorMsg("❌ Email not found.");
      return;
    }

    if (password !== validUser.password) {
      setErrorMsg("❌ Incorrect password.");
      return;
    }

    // ✅ Credentials are correct
    setUser({
      name: validUser.name,
      email: validUser.email,
    });
    setErrorMsg("");
    setShowUserLogin(false);
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      });
      setShowUserLogin(false);
    } catch (error) {
      console.error("Google login error:", error);
      alert("Google Sign-in failed. Try again.");
    }
  };

  return (
    <AnimatePresence>
      {showUserLogin && (
        <motion.div
          key="login"
          className="login-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="login-container"
          >
            <button className="close-btn" onClick={() => setShowUserLogin(false)}>
              <IoMdClose />
            </button>

            <h2 className="login-title">Welcome Back 👋</h2>

            <form onSubmit={handleLogin} className="login-form">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {errorMsg && <div className="login-error">{errorMsg}</div>}

              <button type="submit" className="login-btn">
                Log In
              </button>
            </form>

            <div className="divider"><span>OR</span></div>

            <div className="social-logins">
              <button className="google-btn" onClick={handleGoogleLogin}>
                <FcGoogle className="icon" />
                Login with Google
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Login;
