import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const rounter = useRouter();

  const stylesLogin = {
    body: {
      width: "100%",
      height: "100%",
      overflow: "hidden",
      backgroundColor: "white",
    },
    textLogo: {
      position: "fixed",
      fontSize: "36px",
      fontWeight: "bold",
      color: "black",
      padding: "10px",
      cursor: "pointer",
    },
    contentLogin: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "calc(100% - 36px - 20px)",
      color: "black",
      fontWeight: "bold",
      fontSize: "72px",
    },
  };

  const handleSubmitLogin = async () => {
    console.log("Username:", username);
    console.log("Password:", password);
    const res = await fetch(
      "https://0135-209-145-50-45.ngrok-free.app/api/login/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ username, password }),
      },
    );
    if (res.status === 200) {
      alert("Login Successfull!");
      rounter.push("../Store");
    } else {
      const data = await res.json();
      alert(data.detail);
    }
  };

  const handleKeyDownLogin = (e) => {
    if (e.key === "Enter") {
      handleSubmitLogin();
    }
  };

  const handleSubmitRegister = async () => {
    const res = await fetch(
      "https://0135-209-145-50-45.ngrok-free.app/api/register/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ username, password, name }),
      },
    );
    if (res.status === 200) {
      alert("Login Successfull!");
      rounter.push("../Store");
    } else {
      const data = await res.json();
      alert(data.detail);
    }
  };

  const handleKeyDownRegister = (e) => {
    if (e.key === "Enter") {
      handleSubmitRegister();
    }
  };

  return (
    <div className="h-screen bg-white overflow-hidden">
      <motion.h1
        style={stylesLogin.textLogo}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onClick={() => {
          setLogin(false);
          setRegister(false);
        }}
      >
        PREORDER
      </motion.h1>
      <motion.div
        style={stylesLogin.contentLogin}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => setLogin(!login)}
        >
          LOGIN
        </motion.h1>
        <h1>|</h1>
        <motion.h1
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={() => setRegister(!register)}
        >
          REGISTER
        </motion.h1>
        {login ? (
          <>
            <motion.div
              className="p-8 bg-white absolute w-2/4 drop-shado-md rounded-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="grid grid-rows-3 gap-2">
                <h1 className="text-5xl bg-gray-50 pl-2">LOGIN</h1>
                <input
                  className="text-3xl border-2 p-2 rounded-md border-black w-full"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyDown={handleKeyDownLogin}
                ></input>
                <input
                  className="text-3xl border-2 p-2 rounded-md border-black w-full"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDownLogin}
                ></input>
                <div className="flex justify-end">
                  <button
                    className="border-2 border-black text-xl px-4 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:border-gray-500"
                    onKeyDown={handleKeyDownLogin}
                    onClick={handleSubmitLogin}
                  >
                    ENTER
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          <></>
        )}
        {register ? (
          <>
            <motion.div
              className="p-8 bg-white absolute w-2/4 drop-shadow-md rounded-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="grid grid-rows-4 gap-2">
                <h1 className="text-5xl bg-gray-50 pl-2">LOGIN</h1>
                <input
                  type="text"
                  className="text-3xl border-2 p-2 rounded-md border-black w-full"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyDown={handleKeyDownRegister}
                ></input>
                <input
                  type="password"
                  className="text-3xl border-2 p-2 rounded-md border-black w-full"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDownRegister}
                ></input>
                <input
                  type="text"
                  className="text-3xl border-2 p-2 rounded-md border-black w-full"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={handleKeyDownRegister}
                ></input>
                <div className="flex justify-end">
                  <button
                    className="border-2 border-black text-xl px-4 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:border-gray-500"
                    onKeyDown={handleKeyDownRegister}
                    onClick={handleSubmitRegister}
                  >
                    ENTER
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          <></>
        )}
      </motion.div>
    </div>
  );
};

// const authenticate = async (username, password) => {
//   try {
//     const response = await fetch("http://127.0.0.1:8000/api/login");
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     if()
//     const jsonData = await response.json();
//     return jsonData;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

export default Login;
