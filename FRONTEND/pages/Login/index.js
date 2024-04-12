import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const [numberLogin, setNumberLogin] = useState();
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const rounter = useRouter()

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
      fontSize: "72px"
    },

    

  };

  const handleSubmit = () => {
    console.log("Username:", numberLogin);
    rounter.push('../Store')
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="h-screen bg-white overflow-hidden">
      <motion.h1
        style={stylesLogin.textLogo}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
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
                <div className="p-3 bg-red-500 absolute">
                    <h1>LOGIN</h1>
                    <input 
                    type='text' 
                    placeholder="Username"
                    value={numberLogin}
                    onChange={(e) => setNumberLogin(e.target.value)}
                    onKeyDown={handleKeyDown}
                    ></input>
                </div>
            </>
        ):(
            <></>
        )}
        {register ? (
            <>
                <div className="p-3 bg-red-500 absolute">
                    <h1>LOGIN</h1>
                    <input 
                    type='text' 
                    placeholder="Username"
                    value={numberLogin}
                    onChange={(e) => setNumberLogin(e.target.value)}
                    onKeyDown={handleKeyDown}
                    ></input>
                    <input 
                    type='text' 
                    placeholder="Username"
                    value={numberLogin}
                    onChange={(e) => setNumberLogin(e.target.value)}
                    onKeyDown={handleKeyDown}
                    ></input>
                    <input 
                    type='text' 
                    placeholder="Username"
                    value={numberLogin}
                    onChange={(e) => setNumberLogin(e.target.value)}
                    onKeyDown={handleKeyDown}
                    ></input>
                </div>
            </>
        ):(
            <></>
        )}
      </motion.div>
    </div>
  );


};

export default Login;
