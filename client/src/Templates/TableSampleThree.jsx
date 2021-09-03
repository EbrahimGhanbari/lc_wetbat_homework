import React from "react";
import { MDBDataTable } from "mdbreact";

export default function TableSampleThree({ rows, columns }) {
  const data = { columns, rows };

  return <MDBDataTable striped bordered hover data={data} />;
}
