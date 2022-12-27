import React from "react";

const Alert = (props) => {
  return (
    <div className={`alert alert-${props.m[1]}`} style={{width:'100%',zIndex:'10'}} role="alert">
      {props.m[0]}
</div>
  );
};

export default Alert;