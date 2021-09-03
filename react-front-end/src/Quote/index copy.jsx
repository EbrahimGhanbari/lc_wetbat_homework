import React, { useState, useEffect } from "react";
import axios from "axios";
import QuoteList from "./QuoteList";
import QuoteDetails from "./QuoteDetails";
import TableSampleOne from "../Templates/TableSampleOne";
import TableSampleTwo from "../Templates/TableSampleTwo";
import "./index.scss";

export default function () {
  const [rows, setRows] = useState([]);
  const [quoteid, setQuoteid] = useState(0);
  const [quoteDetail, setQuoteDetail] = useState([]);

  //fetch data from API
  useEffect(() => {
    axios
      .get("/api/quotes")
      .then((response) => {
        let data = [];
        response.data.map((row) => {
          data.push({
            id: (
              <button onClick={() => setQuoteid(row.quote_id)}>
                {row.quote_id}
              </button>
            ),
            destination: row.destination,
            price: row.price,
          });
        });
        return data;
      })
      .then((data) => {
        setRows(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`/api/quotes/${quoteid}`)
      .then((response) => {
        const row = response.data[0];
        let data = [];
        if (!row) return data;

        data.push({
          costumer_name: `${row.costumer_first_name} ${row.costumer_last_name}`,
        });
        return data;
      })
      .then((data) => {
        console.log(data);
        setQuoteDetail(data);
      });
  }, [quoteid]);

  return (
    <div className="quote">
      <div className="quote_table">
        <TableSampleOne
          rows={rows}
          columns={[
            { label: "Quote ID", field: "id", sort: "asc", width: 100 },
            {
              label: "Destination",
              field: "destination",
              sort: "asc",
              width: 150,
            },
            { label: "Price", field: "price", sort: "asc", width: 100 },
          ]}
        />
      </div>
      <div className="quote_detail">
        <p>Quote Details</p>
        {quoteid ? (
          <TableSampleTwo rows={quoteDetail} />
        ) : (
          <p>click on a quote</p>
        )}
      </div>
    </div>
  );
}

// [
//   {
//     quote_id: 41,
//     from: "Santa Clarita",
//     destination: "Harrisonburg",
//     departure_date: "2022-08-31T06:05:02.535Z",
//     return_date: "2021-10-22T21:21:43.027Z",
//     number_of_traveller: 10,
//     price: "39.00",
//     quote_status: "pending",
//     costumer_first_name: "Jeanne",
//     costumer_last_name: "Nitzsche",
//     costumer_email: "Herminio93@gmail.com",
//     costumer_phone: "1-353-590-7975",
//     costumer_address: "Urbandale",
//     staff_first_name: "Delilah",
//     staff_last_name: "Wehner",
//     staff_email: "Evert.Rosenbaum@hotmail.com",
//     staff_phone: "(248) 972-4284 x50340",
//     staff_address: "Port Charlotte",
//   },
// ];
