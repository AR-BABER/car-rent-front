import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const ResponsiveDialog = () => {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Search</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="normal"
            label="Make"
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Model"
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Price From"
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Price Upto"
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Year From"
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Year Upto"
            variant="outlined"
          />
          <Select fullWidth margin="dense" variant="outlined">
            {/* Add your vehicle types here */}
            <MenuItem value={"Car"}>Car</MenuItem>
            {/* ... */}
          </Select>
          <Select fullWidth margin="dense" variant="outlined">
            {/* Add your fuel types here */}
            <MenuItem value={"Petrol"}>Petrol</MenuItem>
            {/* ... */}
          </Select>
          <Select fullWidth margin="dense" variant="outlined">
            {/* Add your payment types here */}
            <MenuItem value={"Cash"}>Cash</MenuItem>
            {/* ... */}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Save Search
          </Button>
          <Button onClick={handleClose} color="primary">
            More Filters
          </Button>
          <Button onClick={handleClose} color="primary">
            Search
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ResponsiveDialog;
