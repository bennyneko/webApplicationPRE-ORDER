var listcart = [
];

function getListCartAll() {
    return listcart;
}

function addProductToCart(product) {
    // ตรวจสอบว่ามีสินค้าที่มี idProduct และ size เดียวกันอยู่ในตะกร้าหรือไม่
    const existingProductIndex = listcart.findIndex(item => item.idProduct === product.idProduct && item.size === product.size);

    if (existingProductIndex !== -1) {
        // ถ้ามีสินค้าที่มี idProduct และ size เดียวกันอยู่ในตะกร้าแล้ว
        // เพิ่มค่า quantity ของสินค้านั้นในตะกร้า
        listcart[existingProductIndex].quantity += 1;
    } else {
        // ถ้าไม่มีสินค้าที่มี idProduct และ size เดียวกันอยู่ในตะกร้า
        // เพิ่มสินค้าใหม่ลงในตะกร้า
        const newData = {
            idProduct: product.idProduct,
            size: product.size,
            quantity: 1
        };
        listcart.push(newData);
    }
}

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

function updateProductInCart(index, updatedProduct) {
    if (index >= 0 && index < listcart.length) {
        listcart[index] = updatedProduct;
    } else {
        console.error('Index out of range');
    }
}

function deleteProductFromCart(index) {
    if (index >= 0 && index < listcart.length) {
        listcart.splice(index, 1);
    } else {
        console.error('Index out of range');
    }
}

export { getListCartAll, addProductToCart, updateProductInCart, deleteProductFromCart };
