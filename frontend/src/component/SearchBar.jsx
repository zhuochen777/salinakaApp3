import React,{useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../css/SearchBar.css";
import { useNavigate } from "react-router-dom";
import { setFilteredProducts } from "../store";
import { useDispatch } from "react-redux";

export default function SearchBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState("")


    const searchInputHandle = (e)=>{
        const val = e.target.value.trimStart()
        setSearchInput(val)
    }

    const keyUpHandle = (e)=>{
        if (e.keyCode === 13){
            e.target.blur()

            const searchInputLowerCase = searchInput.trim().toLocaleLowerCase()
            // dispatch(setFilteredProducts(searchInputLowerCase))
            navigate(`/search/${searchInputLowerCase}`)
        }  
    }

  return (
    <>
      <div className="searchbar">
        <SearchIcon className="searchbar-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search product..."
          onKeyUp={keyUpHandle}
          value={searchInput}
          onChange={searchInputHandle}
        />
      </div>
    </>
  );
}
