import React from "react";

function Searchbox(props) {
  return (
    <div className="col col-ms-4">
      <input
        className="form-control"
        value={props.value}
        onChange={(e) => props.searchValueChange(e.target.value)}
        placeholder="search here..."
      ></input>
    </div>
  );
}

export default Searchbox;
