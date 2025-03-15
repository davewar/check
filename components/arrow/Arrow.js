import React from "react";
import "./arrow.css";
import Link from "next/link";

import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Arrow = (props) => {
  const { idvalue } = props;

  return (
    <div className="arrow-container">
      <Link href={idvalue}>
        <MdOutlineKeyboardDoubleArrowDown className="arrow-down-icon" />
      </Link>
    </div>
  );
};

export default Arrow;
