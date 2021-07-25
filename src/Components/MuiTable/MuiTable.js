import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import "./MuiTable.css";
const MuiTable = ({ data }) => {
  const [arrLength, setarrLength] = useState(50); //initial length of tabledata
  // change tabledata function
  const handleClick = (id) => {
    setarrLength((prevstate) => prevstate + id);
  };
  // converting dollars to millions or billions
  function intlFormat(num) {
    return new Intl.NumberFormat().format(Math.round(num * 10) / 10);
  }
  function abbreviateNumber(value) {
    let num = Math.floor(value);
    if (num >= 1000000000) return intlFormat(num / 1000000000) + "b";
    if (num >= 1000000) return intlFormat(num / 1000000) + "m";
    if (num >= 1000) return intlFormat(num / 1000) + "k";
    return intlFormat(num);
  }
  // colums for tabledata
  const columns = [
    {
      name: "rank",
      label: "Rank",
      options: {
        filter: false,
        sort: true,
        // custom render
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className="nameView rank">
              {parseInt(tableMeta.rowData[0])}
            </div>
          );
        },
      },
    },

    {
      name: "name",
      label: "Name",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className="nameView">
              <img
                src={`https://assets.coincap.io/assets/icons/${
                  tableMeta.rowData[8] && tableMeta.rowData[8].toLowerCase()
                }@2x.png`}
                alt="coinicon"
                className="bitcoinimages"
              />
              <div className="bitcoinData">
                <div>{value}</div>
                <div>{tableMeta.rowData[8]}</div>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: "priceUsd",
      label: "Price",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className="nameView">
              <div>${parseFloat(value).toFixed(2)}</div>
            </div>
          );
        },
      },
    },
    {
      name: "marketCapUsd",
      label: "Market Cap",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className="nameView">
              <div>${abbreviateNumber(value)}</div>
            </div>
          );
        },
      },
    },
    {
      name: "vwap24Hr",
      label: "VWAP (24Hr)",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className="nameView">
              <div>${abbreviateNumber(value)}</div>
            </div>
          );
        },
      },
    },
    {
      name: "volumeUsd24Hr",
      label: "Volume 24Hr",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className="nameView">
              <div>${abbreviateNumber(value)}</div>
            </div>
          );
        },
      },
    },
    {
      name: "supply",
      label: "Supply",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className="nameView">
              <div>{abbreviateNumber(value)}</div>
            </div>
          );
        },
      },
    },
    {
      name: "changePercent24Hr",
      label: "Change (24Hr)",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div
              className={
                value.includes("-") ? "negativeprice" : "positiveprice"
              }
            >
              <div>{parseFloat(value).toFixed(2) + "%"}</div>
            </div>
          );
        },
      },
    },
    {
      name: "symbol",
      label: "symbol",
      options: {
        display: false,
      },
    },
  ];

  const options = {
    pagination: false,
    search: false,
    print: false,
    download: false,
    viewColumns: false,
    filter: false,
    selectableRowsHeader: false,
    responsive: "standard",
    count: arrLength,
    rowHover: true,
    selectableRows: false,
    // custom sort for muidatatable
    customSort: (data, colIndex, order) => {
      return data.sort((a, b) => {
        a = a.data[colIndex] || "";
        b = b.data[colIndex] || "";
        if (order === "asc") {
          return a.toString().localeCompare(b, undefined, { numeric: true });
        } else if (order === "desc") {
          return b.toString().localeCompare(a, undefined, { numeric: true });
        }
      });
    },
  };
  // slicing the tabledata based in user clicking
  const showMoredata = data && data.slice(0, arrLength);
  return (
    <div className="dataTable">
      {/* table render with data,columns,options*/}
      <MUIDataTable data={showMoredata} columns={columns} options={options} />
      <button
        onClick={() => handleClick(arrLength)}
        className="showmore"
        disabled={
          data && showMoredata && data.length === showMoredata.length
            ? true
            : false
        }
      >
        View More
      </button>
    </div>
  );
};

export default MuiTable;
