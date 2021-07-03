import { Link } from "react-router-dom";
import { Tooltip, IconButton, Button } from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

const ListTableActions = (props) => {
  const {
    modelName,
    id,
    handleDelete,
    showViewBtn,
    showEditBtn,
    showDeleteBtn,
    ...rest
  } = props;
  return (
    <>
      {showViewBtn && (
        <Link to={`/item/` + id}>
          <Tooltip title="Show" aria-label="show">
            <IconButton aria-label="show" className="mx-1">
              <VisibilityOutlinedIcon style={{color:"green"}}/>
            </IconButton>
          </Tooltip>
        </Link>
      )}

      {showEditBtn && (
        <Link to={`${modelName}/` + id + "/edit"}>
          <Tooltip title="Edit" aria-label="edit">
            <IconButton aria-label="edit" className="mx-1">
              <CreateOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Link>
      )}
      {showDeleteBtn && (
        <Tooltip title="Delete" aria-label="delete">
          <IconButton
            onClick={() => {
              handleDelete(id);
            }}
            aria-label="delete"
            className="mx-1"
          >
            <DeleteOutlinedIcon style={{color:"red"}}/>
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default ListTableActions;

// Set default props
ListTableActions.defaultProps = {
  showViewBtn: true,
  showEditBtn: true,
  showDeleteBtn: true,
};
