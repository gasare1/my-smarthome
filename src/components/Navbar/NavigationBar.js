import React from "react";
import "./Navbar.css";
import { MdEmail } from "react-icons/md";
import { BsFillBellFill, BsFillQuestionCircleFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaServer } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Progress_bar from "./Progress_bar";
import { FiMenu } from "react-icons/fi";
function NavigationBar() {
  return (
    <nav>
      <div class="navbarcontainer">
        <ul >
          <li id="left">
            <span className="smart">Smart</span>
            <span className="smarthome">Home</span>
          </li>

          <li
            id=""
            style={{ borderLeft: "2px solid #283149", height: "auto" }}
          ></li>
          <li
            id=""
            style={{
              fontSize: "25px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              paddingRight: "14px",
              cursor: "pointer",
            }}
          >
            <FiMenu />
          </li>

          <li
            id=""
            style={{ borderLeft: "2px solid #283149", height: "auto", }}
          ></li>
          <li id="right"></li>
          <li id="progressbar">
            <FaServer />{" "}
            <span
              style={{
                width: "150px",
                justifyContent: "center",
                alignItems: "center",
                margin: "0px 0px 0px 10px",
                marginTop: "7px",
              }}
            >
              <Progress_bar bgcolor="#537EC5" progress="50" height={5} />
            </span>
          </li>
          <li id="bell">
            <MdEmail />
          </li>
          <li id="bell">
            <BsFillBellFill />
          </li>
          <li id="bell">
            <BsFillQuestionCircleFill />
          </li>
          <li id="right-items">
            Username <IoMdArrowDropdown />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
