import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

export default function TableSampleTwo({ rows, columns }) {
  return (
    <MDBTable scrollY maxHeight="70vh">
      <MDBTableHead columns={columns} />
      <MDBTableBody rows={rows} />
    </MDBTable>
  );
}
