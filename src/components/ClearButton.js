import React from "react";
import '../stylesheets/ClearButton.css';

const ClearButton = (props) => (

  <div className="clear-button" onClick={props.clearManagment}>
    {props.children}
  </div>


);

export default ClearButton; 