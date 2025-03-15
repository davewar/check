"use client";
import React from "react";
import "./arrow.css";
import Link from "next/link";

import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Arrow = ({ idvalue }) => {
  return (
    <div className="arrow-container">
      <Link
        // href="#hero2-scroll"
        href={`#${idvalue}`}
        aria-label="arrow-pointing-down-and-when-pressed-scrolls-to-next-section"
      >
        <MdOutlineKeyboardDoubleArrowDown className="arrow-down-icon" />
      </Link>
    </div>
  );
};

export default Arrow;
