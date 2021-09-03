import React, { useState, useEffect } from "react";
import axios from "axios";
import TableSampleTwo from "../Templates/TableSampleTwo";
import { quoteDataMaker } from "./helperFunctions";

export default function ({ quoteid }) {
  const [quoteDetail, setQuoteDetail] = useState([]);

  const columns = [
    { label: "Title", field: "title", sort: "asc" },
    { label: "Value", field: "value", sort: "asc" },
  ];

  useEffect(() => {
    axios
      .get(`/api/quotes/${quoteid}`)
      .then((response) => {
        if (!response.data[0]) return undefined;

        return quoteDataMaker(response.data[0]);
      })
      .then((data) => {
        setQuoteDetail(data);
      });
  }, [quoteid]);

  return (
    <>
      <h3>Quote Details</h3>
      {quoteid ? (
        <TableSampleTwo rows={quoteDetail} columns={columns} />
      ) : (
        <p>click on a quote</p>
      )}
    </>
  );
}
