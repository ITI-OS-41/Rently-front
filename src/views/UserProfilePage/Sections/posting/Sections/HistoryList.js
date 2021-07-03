import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Container, Row } from "reactstrap";
import Header from "components/global/Header.js";
import CallSplitIcon from "@material-ui/icons/CallSplit";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import { DataGrid } from "@material-ui/data-grid";
import { Tooltip, IconButton, Button } from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { get, patch } from "functions/request";
import {
  DATAGRID_RESULTS_PER_PAGE,
  DATAGRID_WIDTH,
} from "../../../../../config";
import { Link } from "react-router-dom";
import UncontrolableSwitch from "components/global/UncontrolableSwitch";
import ListTableActions from "components/global/ListTableActions";

const modelName = "item";

export default () => {
  const id = localStorage.getItem("rently-userid");
  const [dummy, setDemmy] = useState(0);
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rent, setRent] = useState("");

  useEffect(() => {
    get(`/rent?status=returned&owner=${id}`)
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

  const getPrices = (prices) => {
    let final = "";
    if (prices?.day) {
      final += `D: ${prices?.day}$ `;
    }
    if (prices?.week) {
      final += `W: ${prices?.week}$ `;
    }
    if (prices?.month) {
      final += `M: ${prices?.month}$ `;
    }
    return final;
  };

  const columns = [
    {
      field: "photo",
      headerName: "Photo",
      width: `${DATAGRID_WIDTH * 0.1}px`,
      renderCell: (params) => {
        return params.row.item.photo ? (
          <img src={params.row.item.photo} height="50" />
        ) : (
          ""
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: `${DATAGRID_WIDTH * 0.1}px`,
      renderCell: (params) => {
        return params.row.item.name ? <p>{params.row.item.name}</p> : "";
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: `${DATAGRID_WIDTH * 0.1}px`,
     
    },
    {
      field: "stock",
      headerName: "Stock",
      width: `${DATAGRID_WIDTH * 0.1}px`,
      renderCell: (params) => {
        return params.row.item.stock ? <p>{params.row.item.stock}</p> : "";
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: `${DATAGRID_WIDTH * 0.15}px`,
      renderCell: (params) => {
        return getPrices(params.row?.item?.price);
      },
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
