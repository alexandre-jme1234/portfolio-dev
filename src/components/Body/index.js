import React, {useState} from "react";
import '../Body/body.css'

const Body = (props) => {

  return (
    <div className="block-body">
        <div className="body-title">{props.title}</div>
        <div className="body-subtitle">{props.subtitle}</div>
        <div className="body">{props.body}</div>
    </div>
  );
};

export default Body;