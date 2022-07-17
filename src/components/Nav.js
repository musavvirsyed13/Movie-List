import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Nav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Company Info
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <li>
            <p>
              <strong>Company</strong>: Technologies Pvt Ltd
            </p>
            <p>
              <strong>Address</strong>: Sanjayanagar, Bengaluru-56
            </p>
            <p>
              <strong>Phone</strong>: XXXXXXXXX09
            </p>
            <p>
              <strong>Email</strong>: XXXXXX@gmail.com
            </p>
          </li>
        </MenuItem>
      </Menu>
    </div>
  );
}
