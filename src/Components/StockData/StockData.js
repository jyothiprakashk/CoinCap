import React from "react";
import "./StockData.css";
const StockData = () => {
  // dummy data to display in ui
  const stockcontainer = [
    { name: "MARKET CAP", value: "$1.42T" },
    { name: "EXCHANGE VOL", value: " $109.92B" },
    { name: "ASSETS", value: "2,118" },
    { name: "EXCHANGES", value: "78" },
    { name: "MARKETS", value: "14,090" },
    { name: "BTC DOM INDEX", value: "45.1%" },
  ];
  return (
    <div className="stockContainer">
      {/* using map we can show data in ui */}
      {stockcontainer.map((each, index) => {
        return (
          <div className="stockdisplay" key={index}>
            <div>{each.name}</div>
            <div>{each.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StockData;
