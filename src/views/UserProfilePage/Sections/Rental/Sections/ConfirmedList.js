import React, { useEffect, useState,useContext } from "react";
import { Card, CardHeader, CardBody, Container, Row } from "reactstrap";
import Header from "components/global/Header.js";
import CallSplitIcon from '@material-ui/icons/CallSplit';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import { DataGrid } from "@material-ui/data-grid";
import { Tooltip, IconButton, Button } from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { get,post,del } from "functions/request";
import {
  DATAGRID_RESULTS_PER_PAGE,
  DATAGRID_WIDTH,
} from "../../../../../config";
import { Link } from "react-router-dom";
import UncontrolableSwitch from "components/global/UncontrolableSwitch";
import ListTableActions from "components/global/ListTableActions";
import {UserContext} from "../";

const modelName = "item";

export default () => {
  const id = localStorage.getItem("rently-userid");
  const [dummy, setDemmy] = useState(0);
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
    const {user,setUser} = useContext(UserContext);

  const handleDelete = (id) => {
    const conf = window.confirm(`are you sure you want to delete this item?`);
    if (!conf) {
      return;
    }
    del(`item/${id}`, `item deleted successfully!`).then(() => {
      setDemmy((prevState) => prevState + 1);
    });
  };
const updateStatus = (item) => {
    const send = {
      ...item,
      category: item.category._id,
      subcategory: item.subcategory._id,
      owner:item.owner._id,
      isAvailable: !item.isAvailable,
    };
    post(`item/${item._id}`, send, "item availabilty updated successfully!")
      .then((response) => {
      setDemmy((prevState) => prevState + 1);
      })
      .catch((error) => {
        console.log("error");
        alert("hiii")
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    get(`/rent?status=approved&renter=${id}`)
      .then((response) => {
        let res = response.data.res;
        res.forEach((res) => {
          res.id = res._id;
        });
        setRows(res);
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
    if (prices.day) {
      final += `D: ${prices.day} `;
    }
    if (prices.week) {
      final += `W: ${prices.week} `;
    }
    if (prices.month) {
      final += `M: ${prices.month} `;
    }
    return final;
  };

  const columns = [
    {
      field: "photo",
      headerName: "Photo",
      width: `${DATAGRID_WIDTH * 0.1}px`,
      renderCell: (params) => {
        return params.row.item.photo[0] ? (
          <img src={params.row.item.photo[0]} height="50" />
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
      field: "condition",
      headerName: "Condition",
      width: `${DATAGRID_WIDTH * 0.12}px`,
      renderCell: (params) => {
        return params.row.item.condition ? (
          <p> {params.row.item.condition} </p>
        ) : (
          ""
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: `${DATAGRID_WIDTH * 0.1}px`,
      renderCell: (params) => {
        return params.row.item.status ? (
          <p> {params.row.item.status} </p>
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
        return getPrices(params.row.item.price);
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
            
            <Button onClick={() => {
                  updateStatus(params.row);
                }}>
            <CallSplitIcon style={{color:"#FDB813"}}/>
            </Button>
            <Button>
            <CompareArrowsIcon style={{color:"green"}}/>
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
