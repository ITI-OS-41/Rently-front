import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Container, Row } from "reactstrap";
import Header from "components/global/Header.js";
import DoneIcon from "@material-ui/icons/Done";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { DataGrid } from "@material-ui/data-grid";
import history from "functions/history";
import { Tooltip, IconButton, Button } from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { del } from "functions/request";
import { get, post } from "functions/request";
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

  const handleDelete = (id) => {
    const conf = window.confirm(`are you sure you want to delete this item?`);
    if (!conf) {
      return;
    }
    del(`rent/${id}`, `item deleted successfully!`).then(() => {
      setDemmy((prevState) => prevState + 1);
    });
  };
  const approveRequest = (rent) => {
    const send = {
      ...rent,
      status: "approved",
      item: rent.item._id,
      owner: rent.owner._id,
      renter: rent.renter._id,
    };
    console.log(send);
    post(`rent/${rent._id}`, send, "updated successfully!")
      .then((response) => {
        console.log(response);
        setDemmy((prevState) => prevState + 1);
        history.push("/profile/posting");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const declineRequest = (rent) => {
    const send = {
      ...rent,
      status: "declined",
      item: rent.item._id,
      owner: rent.owner._id,
      renter: rent.renter._id,
    };
    console.log(send);
    post(`rent/${rent._id}`, send, "declined successfully!")
      .then((response) => {
        console.log(response);
        setDemmy((prevState) => prevState + 1);
        history.push("/profile/posting");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    get(`/rent?status=pending&owner=${id}`)
      .then((response) => {
        let res = response.data.res;
        res.forEach((res) => {
          res.id = res._id;
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
  }, [dummy]);

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
      field: "renter",
      headerName: "Renter",
      width: `${DATAGRID_WIDTH * 0.1}px`,
      renderCell: (params) => {
        return params.row.renter.username ? (
          <p>{params.row.renter.username}</p>
        ) : (
          ""
        );
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

    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: `${DATAGRID_WIDTH - 0.12}px`,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <>
            <Button
              onClick={() => {
                approveRequest(params.row);
              }}
            >
              <CheckCircleOutlineIcon style={{ color: "green" }} />
            </Button>
            <Button
              onClick={() => {
                declineRequest(params.row);
              }}
            >
              <RemoveCircleOutlineIcon style={{ color: "red" }} />
            </Button>
          </>
        );
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
