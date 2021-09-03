import React, { useState } from "react";
import { MDBDataTable } from "mdbreact";

export default function ({ rows, columns }) {
  const data = { columns, rows };

  return (
    <MDBDataTable scrollY maxHeight="80vh" striped bordered small data={data} />
  );
}
