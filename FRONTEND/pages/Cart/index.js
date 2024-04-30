import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getAllProducts, getProductById } from "../datatest/data";
import { getListCartAll, addProductToCart } from "../datatest/listcart";
import { getAddress } from "../datatest/address";
import Router from "next/router";


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
  const [dataAddresses, setDataAddresses] = useState(getAddress());
  const [selectAddresses, setSelectAddresses] = useState(
    dataAddresses[0]?.addresses?.[0] || null
  );

  const stylesListAddresses = {
    box: {
      borderRadius: "5px",
      backgroundColor: "#d9d9d9",
      marginBottom: "10px",
      padding: "10px",
      border: "2px solid black",
      color: "black",
    },
    boxSelect: {
      borderRadius: "5px",
      backgroundColor: "black",
      marginBottom: "10px",
      padding: "10px",
      color: "white",
    },
  };

  return (
    <div>
      {dataAddresses.map((user, index) => (
        <div key={index}>
          {user.addresses.map((address, idx) => (
            <div
              key={idx}
              style={
                selectAddresses === address
                  ? stylesListAddresses.boxSelect : stylesListAddresses.box
              }
              onClick={() => setSelectAddresses(address)}
            >
              <p>name: {user.name}</p>
              <p>email: {user.email}</p>
              <p>number: {user.number}</p>
              <p>{address.address_type} {" "} {address.country}</p>
              <p>
                {address.address_line_1}{" "}
                {address.address_line_2}{" "}
                {address.district}{" "}
                {address.city}{" "}
                {address.postal_code}
              </p>
              <p>{address.state}</p>
            </div>
          ))}
        </div>
      ))}
      <label className=" text-black p-2 text-center"> + เพิ่มที่อยู๋</label>
    </div>
  );
};

const ListProduct = (props) => {
  const { setSelectProduct, setPriceTotal } = props;
  const [dataProductCart, setDataProductCart] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

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
          size: cartItem.size,
          quantity: cartItem.quantity,
          img: product.img,
        };
      } else {
        return null;
      }
    });

    setDataProductCart(dataProductCart_temp);
  };

  const handleSelectProduct = (product) => {
    const isSelected = selectedProducts.some((item) => item.idProduct === product.idProduct);
    if (isSelected) {
      const updatedProducts = selectedProducts.filter((item) => item.idProduct !== product.idProduct);
      setSelectedProducts(updatedProducts);
      setSelectProduct(updatedProducts)
    } else {
      setSelectedProducts([...selectedProducts, product]);
      setSelectProduct([...selectedProducts, product])
    }
  };

  useEffect(() => {
    loadDataProduct();
  }, []);

  const stylesListProduct = {
    box: {
      height: "150px",
      display: "grid",
      gridTemplateColumns: "150px auto",
      marginBottom: "10px",
    },
    picture: {
      backgroundColor: "#FFFFFF",
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
            <img
              src={product.img}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div style={stylesListProduct.areaDetail}>
            <div>
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <h1>ไซร์: {product.size}</h1>
              <h1> {product.quantity}</h1>
              <h1>ราคา: {product.price}</h1>
            </div>
            <div>
              <div className="flex justify-between text-xl gap-2 text-black">
                <div>Edit</div>
                <div>Delete</div>
              </div>
              <input
                type="checkbox"
                style={{ width: "24px", height: "24px", padding: "5px" }}
                onChange={() => handleSelectProduct(product)}
                checked={selectedProducts.some((item) => item.idProduct === product.idProduct)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ComfirmProduct = (props) => {
  const {selecProduct, priceTotal} = props
  const [dataProductCart, setDataProductCart] = useState([]);

  const loadDataProduct = () => {
    var dataIndex = selecProduct;
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
          img: product.img,
        };
      } else {
        return null;
      }
    });

    setDataProductCart(dataProductCart_temp);
  };

  useEffect(() => {
    loadDataProduct();
  }, []);

  const stylesListProduct = {
    box: {
      height: "150px",
      display: "grid",
      gridTemplateColumns: "150px auto",
      marginBottom: "10px",
    },
    picture: {
      backgroundColor: "#FFFFFF",
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
            <img
              src={product.img}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div style={stylesListProduct.areaDetail}>
            <div>
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <h1>ไซร์: {product.size}</h1>
              {/* <h1>จำนวน: {product.quantity}</h1> */}
              <h1>ราคา: {product.price}</h1>
            </div>
            <div>
              <div className="flex justify-between text-xl gap-2 text-black">
                <div>Edit</div>
                <div>Delete</div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <label className="text-black text-3xl font-bold flex justify-end px-4">ยอดสุุดทิ {priceTotal}</label>
    </div>
  );
};

export default function Cart() {
  const [preorderList, setPreorderList] = useState(false);
  const [selecProduct, setSelectProduct] = useState(null);
  const [priceTotal, setPriceTotal] = useState(0);

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
    areaButton: {
      position: "absolute",
      bottom: "20px",
      right: "15px",
    },
    nextButton: {
      backgroundColor: "#d9d9d9",
      padding: "20px",
      fontWeight: "bold",
      fontSize: "24px",
      color: "black",
      borderRadius: "50px",
    },
    preorderList: {
      height: "calc(100vh - 80px)",
      backgroundColor: "#FFFFFF",
      padding: "5px",
    },
  };

  const handleTogglePreorderList = () => {
    setPreorderList(!preorderList);
    // console.table(selecProduct)
  };

  useEffect(() => {
    // Calculate total price when selected products change
    if (selecProduct !== null) {
      const totalPrice = selecProduct.reduce((total, product) => {
        return total + product.price;
      }, 0);
      setPriceTotal(totalPrice);
    }
  }, [selecProduct]);

  return (
    <div className=" bg-white">
      <HeaderPage preorderList={preorderList} />

      {!preorderList ? (
        <>
          <div style={stylesCart.areaButton}>
            <motion.button
              style={stylesCart.nextButton}
              onClick={handleTogglePreorderList}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {priceTotal} ขั้นตอนต่อไป
            </motion.button>
          </div>
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
              <ListProduct setSelectProduct={setSelectProduct} priceTotal={setPriceTotal}/>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <div style={stylesCart.areaButton}>
            <div className=" grid grid-cols-2 gap-2">
              <motion.button
                style={stylesCart.nextButton}
                onClick={() => {
                  setPreorderList(!preorderList);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ยกเลิก
              </motion.button>
              <motion.button
                style={stylesCart.nextButton}
                onClick={() => {
                  Router.push("../Store");
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ยืนยันสินค้า
              </motion.button>

            </div>
          </div>
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
            <ComfirmProduct selecProduct={selecProduct} priceTotal={priceTotal}/>
          </motion.div>
        </>
      )}
    </div>
  );
}

const loadDataProduct = () => {
  fetch('/api/cart/view/')  // เรียกใช้ REST API endpoint ของ Django backend
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          setDataProductCart(data); // ตั้งค่า state เพื่อแสดงข้อมูลสินค้าในตะกร้า
      })
      .catch(error => {
          console.error('Error fetching cart items:', error);
      });
};

useEffect(() => {
  loadDataProduct(); // เรียกใช้ฟังก์ชัน loadDataProduct เมื่อ component ถูกโหลด
}, []);

const handleSubmit = () => {
  fetch('/api/cart/checkout/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selectedProducts }), // ส่งข้อมูลที่เลือกไปยัง Django backend
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      
  })
  .catch(error => {
      console.error('Error sending selected products:', error);
  });
};
