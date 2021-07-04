import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Container, Row } from "reactstrap";
import Header from "components/global/Header.js";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { get, patch } from "functions/request";
import {
  DATAGRID_RESULTS_PER_PAGE,
  DATAGRID_WIDTH,
} from "../../../../../config";

import Rating from "./Rating"

const modelName = "item";

export default () => {
  const id = localStorage.getItem("rently-userid");
  const [dummy, setDemmy] = useState(0);
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rent, setRent] = useState("");

  useEffect(() => {
    get(`/item?owner=${id}`)
      .then((response) => {
        let res = response.data.res;
        res.forEach((res) => {
          res.id = res._id;
          setRent(res._id);
        });
        setRows(res);
        console.log("current posting Request data res----> ", res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const columns = [
    {
      field: "photo",
      headerName: "Photo",
      width: `${DATAGRID_WIDTH * 0.1}px`,
      renderCell: (params) => {
        return params.row.photo ? (
            <>
          <img src={params.row.photo} height="50" />
          </>
        ) : (
          ""
        );
      },
     
    },
    {
      field: "name",
      headerName: "name",
      width: `${DATAGRID_WIDTH * 0.11}px`,
      renderCell: (params) => {
        return params.row?.name ? (
         <>   
        <p>{params.row?.name}</p>
        <Rating
          name="simple-controlled"
          value={params.row.rating}
        />
        </>
        ) : (
            ""
        ); 
      },
    },
    {
      field: "Views",
      headerName: "Views",
      width: `${DATAGRID_WIDTH * 0.1}px`,
      renderCell: (params) =>("1")
    },
    {
      field: "Bookings",
      headerName: "Bookings",
      width: `${DATAGRID_WIDTH * 0.1}px`,
      renderCell: (params) =>("0")
    },
    {
      field: "Reviews",
      headerName: "Reviews",
      width: `${DATAGRID_WIDTH * 0.15}px`,
      renderCell: (params) =>("1")
    },
    {
        field: "action",
        headerName: "action",
        width: `${DATAGRID_WIDTH * 0.1}px`,
        renderCell: (params) =>(
        <Button
            style={{backgroundColor:"#038C7F", color: "#FFF"}}
        >share</Button>)
      },
    
  ];

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7 " fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow px-3 pb-4">
              <div style={{ height: "70vh", width: "100%" }}>
                <DataGrid
                  columnBuffer={10}
                  loading={isLoading}
                  rows={rows}
                  columns={columns}
                  pageSize={DATAGRID_RESULTS_PER_PAGE}
                />
              </div>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
