import React, { useState, useEffect } from "react";

import QuoteList from "./QuoteList";
import QuoteDetails from "./QuoteDetails";

import "./index.scss";

export default function () {
  const [quoteid, setQuoteid] = useState(0);
  return (
    <div className="quote">
      <div className="quote_table">
        <QuoteList setQuoteid={setQuoteid} />
      </div>
      <div className="quote_detail">
        <QuoteDetails quoteid={quoteid} />
      </div>
    </div>
  );
}
