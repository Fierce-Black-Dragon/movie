import React from "react";

function DisplayData({ title, value ,col}) {
  return (
    <div className={col? "dataD": `DisplayData`}>
      <p>
        <b>{title} :{ "  "} </b>
      </p>
      <p> {" "} {value}</p>
    </div>
  );
}

export default DisplayData;
