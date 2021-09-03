export function quoteDataMaker(obj) {
  return [
    {
      title: "Costumer Name",
      value: `${obj.costumer_first_name} ${obj.costumer_last_name}`,
    },
    {
      title: "Staff Name",
      value: `${obj.staff_first_name} ${obj.staff_last_name}`,
    },
    {
      title: "From",
      value: obj.from,
    },
    {
      title: "Destination",
      value: obj.from,
    },
    {
      title: "Departure Date",
      value: obj.departure_date,
    },
    {
      title: "Return Date",
      value: obj.return_date,
    },

    {
      title: "Number of Traveller",
      value: obj.number_of_traveller,
    },
    {
      title: "Price",
      value: obj.price,
    },
    {
      title: "Costumer Address",
      value: obj.costumer_address,
    },
    {
      title: "Costumer Email",
      value: obj.costumer_email,
    },
    {
      title: "Costumer Phone",
      value: obj.costumer_phone,
    },
    {
      title: "Staff Address",
      value: obj.staff_address,
    },
    {
      title: "Staff Email",
      value: obj.staff_email,
    },
    {
      title: "Staff Phone",
      value: obj.staff_phone,
    },
    {
      title: "Quote Status",
      value: obj.quote_status,
    },
  ];
}
