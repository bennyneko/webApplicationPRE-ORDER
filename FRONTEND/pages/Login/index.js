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
        onClick={() => {
          setLogin(false)
          setRegister(false)
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
                  transition={{ duration: 0.3, ease: "easeOut" }}>
                  <div className="grid grid-rows-3 gap-2">
                    <h1 className="text-5xl bg-gray-50 pl-2">LOGIN</h1>
                    <input
                    className="text-3xl border-2 p-2 rounded-md border-black w-full" 
                    type='text' 
                    placeholder="Username"
                    value={numberLogin}
                    onChange={(e) => setNumberLogin(e.target.value)}
                    onKeyDown={handleKeyDown}
                    ></input>
                    <div className="flex justify-end">
                      <button
                        className="border-2 border-black text-xl px-4 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:border-gray-500"
                        onKeyDown={handleKeyDown}
                      >
                        ENTER
                      </button>
                    </div>
                  </div>
                </motion.div>
            </>
        ):(
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
                    type='text'
                    className="text-3xl border-2 p-2 rounded-md border-black w-full"
                    placeholder="Username"
                    value={numberLogin}
                    onChange={(e) => setNumberLogin(e.target.value)}
                    onKeyDown={handleKeyDown}
                    ></input>
                    <input 
                    type='text' 
                    className="text-3xl border-2 p-2 rounded-md border-black w-full"
                    placeholder="Username"
                    value={numberLogin}
                    onChange={(e) => setNumberLogin(e.target.value)}
                    onKeyDown={handleKeyDown}
                    ></input>
                    <input 
                    type='text'
                    className="text-3xl border-2 p-2 rounded-md border-black w-full"
                    placeholder="Username"
                    value={numberLogin}
                    onChange={(e) => setNumberLogin(e.target.value)}
                    onKeyDown={handleKeyDown}
                    ></input>
                    <div className="flex justify-end">
                      <button
                        className="border-2 border-black text-xl px-4 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:border-gray-500"
                        onKeyDown={handleKeyDown}
                      >
                        ENTER
                      </button>
                    </div>
                  </div>
                </motion.div>
            </>
        ):(
            <></>
        )}
      </motion.div>
    </div>
  );


};

const fetchData = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/ecommerce/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const jsonData = await response.json();
    setData(jsonData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default Login;
