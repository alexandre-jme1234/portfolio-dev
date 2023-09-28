import React, { useState } from "react";
import "../Button/button.css";

const Button = (props) => {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen((o) => !o);


  return (
    <div className="blockButton" onClick={props.showBody}>
      <div className="square">
      </div>
        <div>{props.title}</div>
    </div>
  );
};

export default Button;
