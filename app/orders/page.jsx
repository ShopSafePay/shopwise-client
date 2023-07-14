"use client";

import Footer from "@components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import jwt from "jsonwebtoken";

import Box from "@mui/material/Box";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";

import { useState, useEffect } from "react";

import items from "@utils/productItems";

const columns = [
  {
    field: "transaction_id",
    headerName: "Transaction ID",
    width: 300,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "name",
    headerName: "Requester",
    width: 260,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "amount",
    headerName: "Amount ($)",
    width: 150,
    type: "integer",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "approve",
    headerName: "Approve",
    headerAlign: "center",
    align: "center",
    width: 150,
    renderCell: (params) => (
      <button
        className="rounded-full border-2 border-green-500 px-6 py-1 text-green-600 transition-colors hover:bg-green-500 hover:text-white"
        onClick={async () => {
          console.log(params.row.productId);
          const res = await fetch("/api/orders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              recieverAccount: params.row.account,
              Total: params.row.amount,
              tranId: params.row.transaction_id,
            }),
          });
          console.log("approve");

          if (res.status === 201) {
            const rs = await fetch("/api/orders", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: params.row.objectId,
              }),
            });
            console.log("updated");
            window.location.reload("/orders");
          }
        }}
      >
        Approve
      </button>
    ),
  },
  {
    field: "reject",
    headerName: "Reject",
    headerAlign: "center",
    align: "center",
    width: 150,
    renderCell: (params) => (
      <button
        className="rounded-full border-2 border-red-500 px-6 py-1 text-red-600 transition-colors hover:bg-red-500 hover:text-white"
        onClick={async () => {
          console.log(params.row.productId);
          const res = await fetch("/api/orders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              recieverAccount: params.row.buyerAccount,
              Total: params.row.amount,
              tranId: params.row.transaction_id,
            }),
          });
          console.log("reject");

          if (res.status === 201) {
            const rs = await fetch("/api/orders", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: params.row.objectId,
              }),
            });
            console.log("updated");
            window.location.reload("/orders");
          }
        }}
      >
        Reject
      </button>
    ),
  },
];

// const rows = [
//   {
//     id: 0,
//     transaction_id: "iuy342hjkh",
//     name: "Mahinur Alam",
//     amount: 1299,

//   },
//   {
//     id: 1,
//     transaction_id: "knk214n14",
//     name: "John Doe",
//     amount: 393,

//   },
//   {
//     id: 2,
//     transaction_id: "098cafh32r",
//     name: "B. Williams",
//     amount: 840,

//   },
//   {
//     id: 3,
//     transaction_id: "324niof084",
//     name: "Mehedi Hasan",
//     amount: 423,

//   },
//   {
//     id: 4,
//     transaction_id: "wcd7641kj",
//     name: "Cristiano Ronaldo",
//     amount: 535,
//     credit: 3,

//   },
//   {
//     id: 5,
//     transaction_id: "cac95hj23",
//     name: "Karim Benzema",
//     amount: 501,
//     credit: 1,

//   },
//   {
//     id: 6,
//     transaction_id: "tyue34bn324",
//     name: "Leo Messi",
//     amount: 104,
//     credit: 3,

//   }
// ];

const Order = () => {
  const [row, setRow] = useState([]);

  const dataFetch = async () => {
    const res = await fetch("/api/orders");
    let data = await res.json();
    const token = localStorage.getItem("ecomToken");
    if (!token) {
      window.location.href = "/login";
    }

    const decode = jwt.decode(token);
    let dat = [];
    data = data?.map((item, x) => {
      console.log(items[item.productId - 1].ecomId, decode.id);
      if (items[item.productId - 1].ecomId === decode.id) {
        // return {
        //   id: x + 1,
        //   transaction_id: item.transactionId,
        //   name: item.buyerName,
        //   amount: item.count * items[item.productId - 1].price,
        //   productId: item.productId,
        //   account: items[item.productId - 1].account,
        //   buyerAccount: item.buyerAccount,
        //   objectId: item._id,
        // };
        dat.push({
          id: x + 1,  
          transaction_id: item.transactionId,
          name: item.buyerName,
          amount: item.count * items[item.productId - 1].price,
          productId: item.productId,
          account: items[item.productId - 1].account,
          buyerAccount: item.buyerAccount,
          objectId: item._id,
        });
      }
      
    });

    if(dat){
      console.log(dat);
      setRow(dat);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="flex flex-col items-center justify-center px-32 pt-12">
          <div>
            <h4 class="mb-8 max-w-lg font-sans text-3xl font-bold tracking-tight text-slate-700 sm:text-3xl sm:leading-snug">
              Transactions 🚀
            </h4>
          </div>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={row}
              columns={columns}
              disableSelectionOnClick
              disableColumnFilter
              components={{
                Toolbar: () => {
                  return (
                    <GridToolbarContainer sx={{ justifyContent: "flex-end" }}>
                      <GridToolbarExport
                        printOptions={{ disableToolbarButton: true }}
                        csvOptions={{
                          fileName: "result",
                          delimiter: ";",
                          utf8WithBom: true,
                        }}
                      />
                    </GridToolbarContainer>
                  );
                },
              }}
            />
          </Box>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
