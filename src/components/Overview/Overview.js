import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineHome, AiOutlinePicture } from "react-icons/ai";
import Image from "../Images/houseAvatar.jpeg";
import { MdDevices } from "react-icons/md";
import "./Overview.css";
import { BsGraphUp } from "react-icons/bs";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import { VscDebugRestart } from "react-icons/vsc";
import CardDashboard from "./CardDashboard";
import Dashboard2 from "./Dashboard2";
import Dashboard3 from "./Dashboard3";
import Dashboard4 from "./Dashboard4";
function Overview() {
  return (
    <>
      <div style={{ height: "100vh", backgroundColor: "#112031",width:'100%' }}>
        <Container fluid>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "block",
              flowDirection: "row",
            }}
          >
            <div style={{ justifyContent: "center", display: "flex" }}>
              <Row></Row>
            </div>
          </div>

          <Row>
            <Col xs={2}>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "20px",
                  position: "fixed",
                }}
              >
                <div>
                  <img src={Image} id="house-avatar" alt="houseavatar" />
                </div>

                <div>
                  <p id="left-text">My Smart Home</p>
                  <p id="left-text2">9898 Trent Bypass Suite 541</p>
                </div>
                <div id="left-menu">
                  <div id="left-menus">
                    <p id="menu-icons1">
                      <AiOutlineHome /> <span id="menu-icontext">Overview</span>
                    </p>
                  </div>
                  <div id="left-menus">
                    <p id="menu-icons">
                      <MdDevices /> <span id="menu-icontext">Devices</span>
                    </p>
                  </div>
                  <div id="left-menus">
                    <p id="menu-icons">
                      <BsGraphUp /> <span id="menu-icontext">Analytics</span>
                    </p>
                  </div>
                  <div id="left-menus">
                    <p id="menu-icons">
                      <CgMenuLeftAlt /> <span id="menu-icontext">Rules</span>
                    </p>
                  </div>
                  <div id="left-menus">
                    {" "}
                    <p id="menu-icons">
                      <AiOutlinePicture />{" "}
                      <span id="menu-icontext">Gallery</span>
                    </p>
                  </div>
                  <div id="left-menus">
                    <p id="menu-icons">
                      <VscDebugRestart />{" "}
                      <span id="menu-icontext">History</span>
                    </p>
                    <div id="left-menus"></div>
                    <p id="menu-icons">
                      <FiSettings /> <span id="menu-icontext">Settings</span>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <CardDashboard />
            </Col>
            <Col xs={2}>
              <div><Dashboard2 /></div>
             
            </Col>
            
            
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Overview;
