import p1 from './images/p1.jpg'
const dataTest = [
  {
    id: 1,
    name: "Vans รุ่น Wrapped Skate Old Skool Dark Navy",
    price: 3100,
    description: "รองเท้าผ้าใบ New Balance 9060 Unisex เป็นรุ่นที่ผสมผสานความคลาสสิกและความทันสมัยเข้าด้วยกัน ดีไซน์ได้รับแรงบันดาลใจจากรุ่น 99X ที่โด่งดังของ New Balance มีส่วนโค้งเว้าบนตัวรองเท้าที่ได้รับแรงบันดาลใจจากยุค Y2K พื้นรองเท้าชั้นกลางแบบ ABZORB และ SBS ช่วยให้การรองรับแรงกระแทกและการคืนพลังที่ดี พื้นรองเท้าชั้นนอกทำจากยางทนทาน เหมาะสำหรับสวมใส่ทั้งลำลองและออกกำลังกาย",
    type: "Shoes",
    brand: "Vans",
    quantity: 10,
    sday: "01.04.2024",
    lday: "30.04.2024",
    img: "https://cdn.flightclub.com/TEMPLATE/801601/1.jpg?w=640",
  },
  {
    id: 2,
    name: "NEW BALANCE รุ่น 550 สีขาว/สีน้ำเงิน",
    price: 5400,
    description: "รองเท้าผ้าใบ New Balance 550 เป็นรุ่นที่ผสมผสานความคลาสสิกและความทันสมัยเข้าด้วยกัน ดีไซน์ได้รับแรงบันดาลใจจากรุ่น 99X ที่โด่งดังของ New Balance มีส่วนโค้งเว้าบนตัวรองเท้าที่ได้รับแรงบันดาลใจจากยุค Y2K พื้นรองเท้าชั้นกลางแบบ ABZORB และ SBS ช่วยให้การรองรับแรงกระแทกและการคืนพลังที่ดี พื้นรองเท้าชั้นนอกทำจากยางทนทาน เหมาะสำหรับสวมใส่ทั้งลำลองและออกกำลังกาย",
    type: "Shoes",
    brand: "New Balance",
    quantity: 10,
    sday: "01.04.2024",
    lday: "30.04.2024",
    img: "https://www.footlocker.co.th/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/9/9/9991-NEWBB550FCB00W10H-1.jpg",
  },
  {
    id: 3,
    name: "NIKE รุ่น AIR MAX 90 สีขาว/สีแดง",
    price: 5400,
    description: "รองเท้าผ้าใบ New Balance 550 เป็นรุ่นที่ผสมผสานความคลาสสิกและความทันสมัยเข้าด้วยกัน ดีไซน์ได้รับแรงบันดาลใจจากรุ่น 99X ที่โด่งดังของ New Balance มีส่วนโค้งเว้าบนตัวรองเท้าที่ได้รับแรงบันดาลใจจากยุค Y2K พื้นรองเท้าชั้นกลางแบบ ABZORB และ SBS ช่วยให้การรองรับแรงกระแทกและการคืนพลังที่ดี พื้นรองเท้าชั้นนอกทำจากยางทนทาน เหมาะสำหรับสวมใส่ทั้งลำลองและออกกำลังกาย",
    type: "Shoes",
    brand: "NIKE",
    quantity: 10,
    sday: "01.04.2024",
    lday: "30.04.2024",
    img: "https://cdn.flightclub.com/TEMPLATE/389234/1.jpg?w=640",
  },
  {
    id: 4,
    name: "Vans รุ่น PALM ANGELS X OLD SKOOL VLT LX 'PEWTER'",
    price: 5400,
    description: "รองเท้าผ้าใบ New Balance 550 เป็นรุ่นที่ผสมผสานความคลาสสิกและความทันสมัยเข้าด้วยกัน ดีไซน์ได้รับแรงบันดาลใจจากรุ่น 99X ที่โด่งดังของ New Balance มีส่วนโค้งเว้าบนตัวรองเท้าที่ได้รับแรงบันดาลใจจากยุค Y2K พื้นรองเท้าชั้นกลางแบบ ABZORB และ SBS ช่วยให้การรองรับแรงกระแทกและการคืนพลังที่ดี พื้นรองเท้าชั้นนอกทำจากยางทนทาน เหมาะสำหรับสวมใส่ทั้งลำลองและออกกำลังกาย",
    type: "Shoes",
    brand: "Vans",
    quantity: 10,
    sday: "01.04.2024",
    lday: "30.04.2024",
    img: "https://cdn.flightclub.com/TEMPLATE/336269/1.jpg?w=640",
  },
  {
    id: 5,
    name: "New Balance รุ่น 9060 Unisex สีชมพู",
    price: 6300,
    description: "รองเท้าผ้าใบ New Balance 9060 Unisex เป็นรุ่นที่ผสมผสานความคลาสสิกและความทันสมัยเข้าด้วยกัน ดีไซน์ได้รับแรงบันดาลใจจากรุ่น 99X ที่โด่งดังของ New Balance มีส่วนโค้งเว้าบนตัวรองเท้าที่ได้รับแรงบันดาลใจจากยุค Y2K พื้นรองเท้าชั้นกลางแบบ ABZORB และ SBS ช่วยให้การรองรับแรงกระแทกและการคืนพลังที่ดี พื้นรองเท้าชั้นนอกทำจากยางทนทาน เหมาะสำหรับสวมใส่ทั้งลำลองและออกกำลังกาย",
    type: "Shoes",
    brand: "New Balance",
    quantity: 10,
    sday: "01.04.2024",
    lday: "30.04.2024",
    img: "https://www.footlocker.co.th/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/9/9/9991-NEWU9060FRL0PK007-1.jpg",
  },
  {
    id: 6,
    name: "NIKE รุ่น AIR MAX 90 สีเขียว",
    price: 5400,
    description: "รองเท้าผ้าใบ New Balance 550 เป็นรุ่นที่ผสมผสานความคลาสสิกและความทันสมัยเข้าด้วยกัน ดีไซน์ได้รับแรงบันดาลใจจากรุ่น 99X ที่โด่งดังของ New Balance มีส่วนโค้งเว้าบนตัวรองเท้าที่ได้รับแรงบันดาลใจจากยุค Y2K พื้นรองเท้าชั้นกลางแบบ ABZORB และ SBS ช่วยให้การรองรับแรงกระแทกและการคืนพลังที่ดี พื้นรองเท้าชั้นนอกทำจากยางทนทาน เหมาะสำหรับสวมใส่ทั้งลำลองและออกกำลังกาย",
    type: "Shoes",
    brand: "NIKE",
    quantity: 10,
    sday: "01.04.2024",
    lday: "30.04.2024",
    img: "https://cdn.flightclub.com/TEMPLATE/375330/1.jpg?w=640",
  },
  {
    id: 7,
    name: "ADIDAS รุ่น ADILETTE 22 XLG สีชมพู",
    price: 2400,
    description: "รองเท้าผ้าใบ New Balance 550 เป็นรุ่นที่ผสมผสานความคลาสสิกและความทันสมัยเข้าด้วยกัน ดีไซน์ได้รับแรงบันดาลใจจากรุ่น 99X ที่โด่งดังของ New Balance มีส่วนโค้งเว้าบนตัวรองเท้าที่ได้รับแรงบันดาลใจจากยุค Y2K พื้นรองเท้าชั้นกลางแบบ ABZORB และ SBS ช่วยให้การรองรับแรงกระแทกและการคืนพลังที่ดี พื้นรองเท้าชั้นนอกทำจากยางทนทาน เหมาะสำหรับสวมใส่ทั้งลำลองและออกกำลังกาย",
    type: "Shoes",
    brand: "ADIDAS",
    quantity: 10,
    sday: "01.04.2024",
    lday: "30.04.2024",
    img: "https://www.footlocker.co.th/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/9/9/9991-ADIIE5651MAU007-1.jpg",
  },
  {
    id: 8,
    name: "NIKE รุ่น DUNK LOW NEXT NATURE สีขาว/สีแดง",
    price: 3700,
    description: "รองเท้าผ้าใบ New Balance 550 เป็นรุ่นที่ผสมผสานความคลาสสิกและความทันสมัยเข้าด้วยกัน ดีไซน์ได้รับแรงบันดาลใจจากรุ่น 99X ที่โด่งดังของ New Balance มีส่วนโค้งเว้าบนตัวรองเท้าที่ได้รับแรงบันดาลใจจากยุค Y2K พื้นรองเท้าชั้นกลางแบบ ABZORB และ SBS ช่วยให้การรองรับแรงกระแทกและการคืนพลังที่ดี พื้นรองเท้าชั้นนอกทำจากยางทนทาน เหมาะสำหรับสวมใส่ทั้งลำลองและออกกำลังกาย",
    type: "Shoes",
    brand: "NIKE",
    quantity: 10,
    sday: "01.04.2024",
    lday: "30.04.2024",
    img: "https://www.footlocker.co.th/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/9/9/9991-NIKDN143110100W07H-1.jpg",
  },
  {
    id: 9,
    name: "Vans รุ่น COMFYCUSH SLIP-ON รองเท้าผ้าใบ UNISEX - ลาย CHECKERBOARD",
    price: 2600,
    description: "รองเท้าผ้าใบ New Balance 550 เป็นรุ่นที่ผสมผสานความคลาสสิกและความทันสมัยเข้าด้วยกัน ดีไซน์ได้รับแรงบันดาลใจจากรุ่น 99X ที่โด่งดังของ New Balance มีส่วนโค้งเว้าบนตัวรองเท้าที่ได้รับแรงบันดาลใจจากยุค Y2K พื้นรองเท้าชั้นกลางแบบ ABZORB และ SBS ช่วยให้การรองรับแรงกระแทกและการคืนพลังที่ดี พื้นรองเท้าชั้นนอกทำจากยางทนทาน เหมาะสำหรับสวมใส่ทั้งลำลองและออกกำลังกาย",
    type: "Shoes",
    brand: "Vans",
    quantity: 10,
    sday: "01.04.2024",
    lday: "30.04.2024",
    img: "https://www.footlocker.co.th/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/9/9/9991-VAS0A3WMDVO4005006-1.jpg",
  },
  {
    id: 10,
    name: "CROCS X NARUTO CLASSIC",
    price: 2900,
    description: "รองเท้าผ้าใบ New Balance 550 เป็นรุ่นที่ผสมผสานความคลาสสิกและความทันสมัยเข้าด้วยกัน ดีไซน์ได้รับแรงบันดาลใจจากรุ่น 99X ที่โด่งดังของ New Balance มีส่วนโค้งเว้าบนตัวรองเท้าที่ได้รับแรงบันดาลใจจากยุค Y2K พื้นรองเท้าชั้นกลางแบบ ABZORB และ SBS ช่วยให้การรองรับแรงกระแทกและการคืนพลังที่ดี พื้นรองเท้าชั้นนอกทำจากยางทนทาน เหมาะสำหรับสวมใส่ทั้งลำลองและออกกำลังกาย",
    type: "Shoes",
    brand: "CROCS",
    quantity: 10,
    sday: "01.04.2024",
    lday: "30.04.2024",
    img: "https://www.footlocker.co.th/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/9/9/9991-CCR209445410NAVM1A-1.jpg",
  },
  {
    id: 11,
    name: "CROCS X TOY STORY รุ่น WOODY CLASSIC",
    price: 2400,
    description: "รองเท้าผ้าใบ New Balance 550 เป็นรุ่นที่ผสมผสานความคลาสสิกและความทันสมัยเข้าด้วยกัน ดีไซน์ได้รับแรงบันดาลใจจากรุ่น 99X ที่โด่งดังของ New Balance มีส่วนโค้งเว้าบนตัวรองเท้าที่ได้รับแรงบันดาลใจจากยุค Y2K พื้นรองเท้าชั้นกลางแบบ ABZORB และ SBS ช่วยให้การรองรับแรงกระแทกและการคืนพลังที่ดี พื้นรองเท้าชั้นนอกทำจากยางทนทาน เหมาะสำหรับสวมใส่ทั้งลำลองและออกกำลังกาย",
    type: "Shoes",
    brand: "CROCS",
    quantity: 10,
    sday: "01.04.2024",
    lday: "30.04.2024",
    img: "https://www.footlocker.co.th/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/9/9/9991-CCR2094614GX12W0J1-1.jpg",
  },
  {
    id: 12,
    name: "CROCS X TOY STORY รุ่น BUZZ CLASSIC CLOG",
    price: 2400,
    description: "รองเท้าผ้าใบ New Balance 550 เป็นรุ่นที่ผสมผสานความคลาสสิกและความทันสมัยเข้าด้วยกัน ดีไซน์ได้รับแรงบันดาลใจจากรุ่น 99X ที่โด่งดังของ New Balance มีส่วนโค้งเว้าบนตัวรองเท้าที่ได้รับแรงบันดาลใจจากยุค Y2K พื้นรองเท้าชั้นกลางแบบ ABZORB และ SBS ช่วยให้การรองรับแรงกระแทกและการคืนพลังที่ดี พื้นรองเท้าชั้นนอกทำจากยางทนทาน เหมาะสำหรับสวมใส่ทั้งลำลองและออกกำลังกาย",
    type: "Shoes",
    brand: "CROCS",
    quantity: 10,
    sday: "01.04.2024",
    lday: "30.04.2024",
    img: "https://www.footlocker.co.th/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/9/9/9991-CCR2098560IDGRE0J1-1.jpg",
  },
  {
    id: 13,
    name: "ADIDAS รุ่น HANDBALL SPEZIAL",
    price: 2400,
    description: "รองเท้าผ้าใบ New Balance 550 เป็นรุ่นที่ผสมผสานความคลาสสิกและความทันสมัยเข้าด้วยกัน ดีไซน์ได้รับแรงบันดาลใจจากรุ่น 99X ที่โด่งดังของ New Balance มีส่วนโค้งเว้าบนตัวรองเท้าที่ได้รับแรงบันดาลใจจากยุค Y2K พื้นรองเท้าชั้นกลางแบบ ABZORB และ SBS ช่วยให้การรองรับแรงกระแทกและการคืนพลังที่ดี พื้นรองเท้าชั้นนอกทำจากยางทนทาน เหมาะสำหรับสวมใส่ทั้งลำลองและออกกำลังกาย",
    type: "Shoes",
    brand: "ADIDAS",
    quantity: 10,
    sday: "01.04.2024",
    lday: "30.04.2024",
    img: "https://www.footlocker.co.th/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/9/9/9991-ADIIF374100W008-1.jpg",
  },
  {
    id: 14,
    name: "PUMA SUEDE XL MEN SNEAKERS",
    price: 2400,
    description: "รองเท้าผ้าใบ New Balance 550 เป็นรุ่นที่ผสมผสานความคลาสสิกและความทันสมัยเข้าด้วยกัน ดีไซน์ได้รับแรงบันดาลใจจากรุ่น 99X ที่โด่งดังของ New Balance มีส่วนโค้งเว้าบนตัวรองเท้าที่ได้รับแรงบันดาลใจจากยุค Y2K พื้นรองเท้าชั้นกลางแบบ ABZORB และ SBS ช่วยให้การรองรับแรงกระแทกและการคืนพลังที่ดี พื้นรองเท้าชั้นนอกทำจากยางทนทาน เหมาะสำหรับสวมใส่ทั้งลำลองและออกกำลังกาย",
    type: "Shoes",
    brand: "PUMA",
    quantity: 10,
    sday: "01.04.2024",
    lday: "30.04.2024",
    img: "https://www.footlocker.co.th/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/9/9/9991-PMA395205-0300R038-1.jpg",
  },
  {
    id: 15,
    name: "Onitsuka Tiger รุ่น Mexico 66™ Deluxe low-top sneakers",
    price: 2400,
    description: "รองเท้าผ้าใบ New Balance 550 เป็นรุ่นที่ผสมผสานความคลาสสิกและความทันสมัยเข้าด้วยกัน ดีไซน์ได้รับแรงบันดาลใจจากรุ่น 99X ที่โด่งดังของ New Balance มีส่วนโค้งเว้าบนตัวรองเท้าที่ได้รับแรงบันดาลใจจากยุค Y2K พื้นรองเท้าชั้นกลางแบบ ABZORB และ SBS ช่วยให้การรองรับแรงกระแทกและการคืนพลังที่ดี พื้นรองเท้าชั้นนอกทำจากยางทนทาน เหมาะสำหรับสวมใส่ทั้งลำลองและออกกำลังกาย",
    type: "Shoes",
    brand: "Onitsuka",
    quantity: 10,
    sday: "01.04.2024",
    lday: "30.04.2024",
    img: "https://cdn-images.farfetch-contents.com/17/94/64/81/17946481_38357474_1000.jpg",
  },
];

function getAllProducts() {
  return dataTest;
}

// Get a single product by id
function getProductById(id) {
  return dataTest.find((product) => product.id === id);
}

// Add a new product
function addProduct(newProduct) {
  const maxId = Math.max(...dataTest.map((product) => product.id));
  const id = maxId + 1;
  const product = { id, ...newProduct };
  dataTest.push(product);
  return product;
}

// Update an existing product
function updateProduct(id, updatedProduct) {
  const index = dataTest.findIndex((product) => product.id === id);
  if (index === -1) {
    throw new Error(`Product with id ${id} not found`);
  }
  dataTest[index] = { ...dataTest[index], ...updatedProduct };
  return dataTest[index];
}

// Delete a product
function deleteProduct(id) {
  const index = dataTest.findIndex((product) => product.id === id);
  if (index === -1) {
    throw new Error(`Product with id ${id} not found`);
  }
  const deletedProduct = dataTest.splice(index, 1)[0];
  return deletedProduct;
}

export {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
