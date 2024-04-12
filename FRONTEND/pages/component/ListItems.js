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
  }, [data]);

  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-2 pb-4">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-2 rounded-lg shadow-md cursor-pointer justify-between"
            onClick={() => openModaled(index)}
            style={{ display: "flex", flexDirection: "column" }} // Removed unnecessary justification
          >
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
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
              {/* <button className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-md self-start">
                Add to Cart
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
