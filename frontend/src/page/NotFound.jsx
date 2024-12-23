import React from "react";
import Nav from "../component/Nav";
import "../css/NotFound.css"

export default function NotFound() {
  return (
    <>
      <Nav />
      <div className="page-not-found">
        <h1>:( Page you are looking for doesn't exists.</h1>
        <br />
        {/* <button className="button" type="button">
          Go back
        </button> */}
      </div>
    </>
  );
}
