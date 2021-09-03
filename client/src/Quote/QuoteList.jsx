import React, { useState, useEffect } from "react";
import axios from "axios";
import TableSampleOne from "../Templates/TableSampleOne";
import TableSampleThree from "../Templates/TableSampleThree";

export default function ({ setQuoteid }) {
  const [rows, setRows] = useState([]);

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

  return (
    <>
      <h3>Quote List</h3>
      <TableSampleThree
        rows={rows}
        columns={[
          { label: "Quote ID", field: "id", sort: "asc", width: 100 },
          {
            label: "Destination",
            field: "destination",
            sort: "asc",
            width: 150,
            attributes: {
              "aria-controls": "DataTable",
              "aria-label": "Name",
            },
          },
          { label: "Price", field: "price", sort: "asc", width: 100 },
        ]}
      />
    </>
  );
}
