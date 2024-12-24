import React, { useState, useContext } from "react";
import "../css/FilterOptions.css";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import Divider from "@mui/material/Divider";
import { shopFilterContext } from "../App.js";
// import { useSelector } from "react-redux";

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

const marks = [
  {
    value: 100,
    label: "100",
  },
  {
    value: 200,
    label: "200",
  },
  {
    value: 300,
    label: "300",
  },
  {
    value: 400,
    label: "400",
  },
  {
    value: 500,
    label: "500",
  },
  {
    value: 600,
    label: "600",
  },
];

export default function FilterOptions() {
  const { selectFilter, setSelectFilter, filterFields, setFilterFields } =
    useContext(shopFilterContext);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleChangePrice = (event, newValuePrice) => {
    setFilterFields({ ...filterFields, valuePrice: newValuePrice });
  };

  const handleBrandChange = (event) => {
    setFilterFields({ ...filterFields, brand: event.target.value });
  };
  const handleSortByChange = (event) => {
    setFilterFields({ ...filterFields, sortBy: event.target.value });
  };

  const applyFilterHandle = () => {
    setSelectFilter(true);
    handleCloseModal();
  };

  const resetFilterHandle=()=>{
    setSelectFilter(false)
    setFilterFields({
      brand: "All Brands",
      sortBy: "None",
      valuePrice: [67,674]
    })
    handleCloseModal()
  }

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
              <div className="filters-field-wrapper">
                <div className="filters-field-top">
                  <div className="filters-field">
                    <span>Brand</span>
                    <br />
                    <br />
                    <div className="filters-brand">
                      <Box>
                        <FormControl fullWidth>
                          {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={filterFields.brand}
                            // label="brand"
                            onChange={handleBrandChange}
                          >
                            <MenuItem value={"All Brands"}>All Brands</MenuItem>
                            <MenuItem value={"Salt Maalat"}>
                              Salt Maalat
                            </MenuItem>
                            <MenuItem value={"Betsin Maalat"}>
                              Betsin Maalat
                            </MenuItem>
                            <MenuItem value={"Black Kibal"}>
                              Black Kibal
                            </MenuItem>
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
                      <Box>
                        <FormControl fullWidth>
                          {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={filterFields.sortBy}
                            // label="sortBy"
                            onChange={handleSortByChange}
                          >
                            <MenuItem value={"None"}>None</MenuItem>
                            <MenuItem value={"Name Ascending A - Z"}>
                              Name Ascending A - Z
                            </MenuItem>
                            <MenuItem value={"Name Descending Z - A"}>
                              Name Descending Z - A
                            </MenuItem>
                            <MenuItem value={"Price High - Low"}>
                              Price High - Low
                            </MenuItem>
                            <MenuItem value={"Price Low - High"}>
                              Price Low - High
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                  </div>
                </div>
                <Divider style={{ margin: "20px 0" }} />
                <div className="filters-field">
                  <span>Price Range</span>
                  <br />
                  <br />
                  <div className="priceRangeDisplay">
                    <div className="priceRangeDisplay_center">
                      <span className="priceLow">
                        {" "}
                        ${filterFields.valuePrice[0]}
                      </span>
                      <span className="priceDash"> - </span>
                      <span className="priceHigh">
                        ${filterFields.valuePrice[1]}
                      </span>
                    </div>
                    <div className="priceRangeSlider">
                      <Box>
                        <Slider
                          getAriaLabel={() => "Price range"}
                          value={filterFields.valuePrice}
                          onChange={handleChangePrice}
                          marks={marks}
                          min={64}
                          max={674}
                          //   valueLabelDisplay="auto"
                          //   getAriaValueText={valuetext}
                        />
                      </Box>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filters-action">
                <button
                  className="applyfil-btn"
                  type="button"
                  onClick={() => applyFilterHandle()}
                >
                  Apply filters
                </button>
                <button
                  className="resetfil-btn "
                  type="button"
                  onClick={() => resetFilterHandle()}
                >
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
