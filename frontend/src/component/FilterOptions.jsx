import React, { useState } from "react";
import "../css/FilterOptions.css";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FilterOptions() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const [brand, setBrand] = useState("All Brands");
  const [sortBy, setSortBy] = useState("All Brands");

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  return (
    <>
      <button className="filter-btn" onClick={() => handleOpenModal()}>
        Filters &nbsp; <FilterAltIcon />
      </button>
      <div className="modal-wrapper">
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="filters">
              <div className="filters-field">
                <span>Brand</span>
                <br />
                <br />
                <div className="filters-brand">
                  <Box >
                    <FormControl fullWidth>
                      {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={brand}
                        label="brand"
                        onChange={handleBrandChange}
                      >
                        <MenuItem value={"All Brands"}>All Brands</MenuItem>
                        <MenuItem value={"Salt Maalat"}>Salt Maalat</MenuItem>
                        <MenuItem value={"Betsin Maalat"}>Betsin Maalat</MenuItem>
                        <MenuItem value={"Black Kibal"}>Black Kibal</MenuItem>
                        <MenuItem value={"Sexbomb"}>Sexbomb</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
              <div className="filters-field">
              <span>Sort By</span>
                <br />
                <br />
                <div className="filters-brand">
                  <Box >
                    <FormControl fullWidth>
                      {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sortBy}
                        label="sortBy"
                        // onChange={handleSortByChange}
                      >
                        <MenuItem value={"All Brands"}>All Brands</MenuItem>
                        <MenuItem value={"Salt Maalat"}>Salt Maalat</MenuItem>
                        <MenuItem value={"Betsin Maalat"}>Betsin Maalat</MenuItem>
                        <MenuItem value={"Black Kibal"}>Black Kibal</MenuItem>
                        <MenuItem value={"Sexbomb"}>Sexbomb</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
              <div className="filters-field">
                <span>Price Range</span>
                <br />
                <br />
                pricerange
              </div>
              <div className="filters-action">
                <button className="filters-button" type="button">
                  Apply filters
                </button>
                <button className="filters-button " type="button">
                  Reset filters
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}
