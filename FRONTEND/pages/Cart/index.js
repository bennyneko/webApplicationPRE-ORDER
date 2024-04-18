import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getAllProducts, getProductById } from "../datatest/data";
import { getListCartAll, addProductToCart } from "../datatest/listcart";
import Router from "next/router";

var data = [
  {
    id: 1,
    name: "test",
    address: "Home",
    number: "123",
  },
  {
    id: 2,
    name: "test",
    address: "Home",
    number: "123",
  },
];

const HeaderPage = (props) => {
  const stylesHeaderPage = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      overflow: "hidden",
      backgroundColor: "#FFFFFF",
    },
    textLogo: {
      fontSize: "36px",
      fontWeight: "bold",
      color: "black",
      padding: "10px",
      overflow: "hidden",
      cursor: "pointer",
    },
  };

  return (
    <motion.div style={stylesHeaderPage.header}>
      <motion.h1
        style={stylesHeaderPage.textLogo}
        onClick={props.openMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href={"../Store"}>
          <label>PREORDER CART</label>
        </Link>
      </motion.h1>
      <div>Profile</div>
    </motion.div>
  );
};

const ListAddresses = () => {

  const stylesListAddresses = {
    box: {
      height: "150px",
      borderRadius: "5px",
      backgroundColor: "#d9d9d9",
      marginBottom: "10px",
      padding: "5px",
      border: "5px solid black",
      whileHover: ""
    },
  };
  return (
    <div>
      {data.map((data, index) => (
        <div key={index} style={stylesListAddresses.box}>
          <h1>{data.name}</h1>
          <p>{data.address}</p>
          <p>{data.number}</p>
        </div>
      ))}
      <label className=" text-black p-2 text-center"> + เพิ่มที่อยู๋</label>
    </div>
  );
};

const ListProduct = () => {
  const [dataProductCart, setDataProductCart] = useState([]);

  const loadDataProduct = () => {
    var dataIndex = getListCartAll(); 
    var dataProduct = getAllProducts(); 

    const dataProductCart_temp = dataIndex.map((cartItem) => {
      const product = dataProduct.find(
        (product) => product.id === cartItem.idProduct
      );
      if (product) {
        return {
          idProduct: product.id,
          name: product.name,
          price: product.price,
          size: cartItem.size, // ใช้ cartItem.size จาก dataIndex
          quantity: cartItem.quantity,
          img: product.img
        };
      } else {
        return null;
      }
    });

    setDataProductCart(dataProductCart_temp);

    // แสดงข้อมูลในรูปแบบตาราง
    console.table(dataIndex);
    console.table(dataProductCart_temp);
  };

  useEffect(() => {
    // เรียกใช้งานฟังก์ชั่น loadDataProduct เพียงครั้งเมื่อคอมโพเนนต์ถูกโหลดเท่านั้น
    loadDataProduct();
  }, []); // ลิสต์ของพจน์ที่ว่างไปทำให้ useEffect ทำงานเพียงครั้งเดียวหลังจากที่คอมโพเนนต์ถูกโหลด

  const stylesListProduct = {
    box: {
      height: "150px",
      display: "grid",
      gridTemplateColumns: "150px auto",
      marginBottom: "10px",
    },
    picture: {
      backgroundColor: "#d9d9d9",
      width: "150px",
      height: "150px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    areaDetail: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      color: "black",
    },
  };

  return (
    <div>
      {dataProductCart.map((product, index) => (
        <div key={index} style={stylesListProduct.box}>
          <div style={stylesListProduct.picture}>
            <img src={product.img} alt={product.name} className="max-w-full max-h-full" />
          </div>
          <div style={stylesListProduct.areaDetail}>
            <div>
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <h1> Size {product.size}</h1>
              <h1>{product.quantity}</h1>
            </div>
            <div>
              <div className="flex justify-between gap-2 text-black">
                <div>แก้ไข</div>
                <div>ลบ</div>
              </div>
              <input type="checkbox"></input>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

};


export default function Cart() {
  const [preorderList, setPreorderList] = useState(false);

  const stylesCart = {
    content: {
      display: "grid",
      gridTemplateColumns: "1.5fr 6fr",
      height: "calc(100vh - 80px)",
      backgroundColor: "#FFFFFF",
    },
    listaddress: {
      padding: "5px",
    },
    listproduct: {
      padding: "5px",
    },
    nextButton: {
      backgroundColor: "#d9d9d9",
    },
    preorderList: {
      height: "calc(100vh - 80px)",
      backgroundColor: "#FFFFFF",
      padding: "5px",
    },
  };

  const handleTogglePreorderList = () => {
    setPreorderList(!preorderList);
  };

  return (
    <div className=" bg-white">
      <HeaderPage preorderList={preorderList} />

      {!preorderList ? (
        <>
          <motion.button
            style={stylesCart.nextButton}
            className="absolute bottom-5 right-5 p-8 font-bold text-2xl text-black"
            onClick={handleTogglePreorderList}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ขั้นตอนต่อไป
          </motion.button>
          <motion.div
            style={stylesCart.content}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
              ease: "easeInOut",
            }}
          >
            <div className="overflow-y-auto" style={stylesCart.listaddress}>
              <ListAddresses />
            </div>
            <div className="overflow-y-auto" style={stylesCart.listproduct}>
              <ListProduct />
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.button
            style={stylesCart.nextButton}
            className="absolute bottom-5 right-5 p-8 font-bold text-2xl text-black"
            onClick={()=>{Router.push('../Store')}}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ยืนยันสินค้า12
          </motion.button>
          <motion.div
            className="overflow-y-auto"
            style={stylesCart.preorderList}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
              ease: "easeInOut",
            }}
          >
            <ListProduct />
          </motion.div>
        </>
      )}
    </div>
  );
}
