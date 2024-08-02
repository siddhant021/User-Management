import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import Table from "./Table"
const columns =[
    {
        field: "name",
        headerName: "Name",
        headerClassName: "table-header",
        width: 200,
    },
    {
        field: "email",
        headerName: "Email",
        headerClassName: "table-header",
        width: 200,
    },

    {
        field: "phone",
        headerName: "Phone No.",
        headerClassName: "table-header",
        width: 200,
    },

    {
        field: "type",
        headerName: "TYPE",
        headerClassName: "table-header",
        width: 200,
    },
    {
        field: "location",
        headerName: "LOCATION",
        headerClassName: "table-header",
        width: 200,
    },
    {
        field: "function",
        headerName: "FUNCTION",
        headerClassName: "table-header",
        width: 150,
    },
];
const Manage = ({data}) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (data) {
      setRows(
        data.map((i,index) => ({
          ...i,
          id:index,
          name:i.First_Name,
          email:i.Email,
          phone :i.Phone,
          type:i.Role,
          location:i.Location,
          function:i.Department,
          
       }))
      );
    }
  }, [data]);
    return (
        <Table columns={columns} rows={rows}/>
    );

}
export default Manage;

