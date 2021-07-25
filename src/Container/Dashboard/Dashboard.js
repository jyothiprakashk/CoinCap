import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import StockData from "../../Components/StockData/StockData";
import { getData } from "../../Actions/stocks";
import { useDispatch } from "react-redux";
import MuiTable from "../../Components/MuiTable/MuiTable";
import { useSelector } from "react-redux"; //get data from redux store
const Dashboard = () => {
  const { stocks } = useSelector(({ reducers }) => reducers); //redux hook
  const dispatch = useDispatch();
  // calling api to get stocks data
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div>
      {/* fixed header  */}
      <Header />

      <div className="dashboardContainer">
        {/* stocks component */}
        <StockData />
        {/* passing data to table for rend */}
        <MuiTable data={stocks} />
      </div>
    </div>
  );
};

export default Dashboard;
