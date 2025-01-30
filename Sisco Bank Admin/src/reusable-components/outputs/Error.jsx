/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function Error({ classes, message }) {
  return (
    <div className={`${classes} text-green-900 font-inria-sans text-xs pl-1`}>
      {message}
    </div>
  );
}
