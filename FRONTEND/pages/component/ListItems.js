import React, { useState, useEffect } from "react";

export default function ListItem(props) {
  const { data, openModaled } = props;
  const [products, setProducts] = useState([]);

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  useEffect(() => {
    setProducts(data);
    console.log("This is inside list Item");
    console.log(data);
  }, [data]);

  return (
    <div className="bg-white text-black h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-2 pb-4">
        {products.map((item, index) => (
          <div
            key={index}
            className=" p-2 rounded-lg shadow-md cursor-pointer justify-between"
            onClick={() => openModaled(item.sku)}
            style={{ display: "flex", flexDirection: "column" }} // Removed unnecessary justification
          >
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex justify-between p-1">
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="bg-green-400 p-2 h-10 rounded-lg">Stork</p>
            </div>
            <div>
              <p className="text-gray-700 mb-2">
                {new Intl.NumberFormat("th-TH", {
                  style: "currency",
                  currency: "THB",
                }).format(item.price)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
