import React from "react";
import { Card } from "react-bootstrap";
import homeImage from "../Images/homeInterior.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardDashboard.css";
import { BsRecordCircle } from "react-icons/bs";

function CardDashboard() {
  return (
    <div style={{position:'relative' }}>
      <p className="card-header">Overview</p>
      <Card
        style={{
          width: "48vw",
          height: "40vh",
          backgroundColor: "#404B69",
          caretColor: "#0000",
        }}
        class="shadow p-3 mb-5  rounded"
      >
        <Card.Body>
          <p id="camera-text">Camera</p>
          <img src={homeImage} alt="Norway" style={{ width: "46vw",marginBottom:'20px',height:'35vh' }} />
          <div className="text-block">
            <h4>
              Recording <BsRecordCircle style={{ color: "red" }} />
            </h4>
          </div>
          <div className="text-block2">
            <p>
            2/19/2022 11:52 PM
            </p>
          </div>
          <div className="text-block3">
            <ul className='text-ul'>
                <li className='text-li'>
                    C1
                </li>
                <li>
                    C2
                </li>
                <li>
                    C3
                </li>
                <li>
                    C4
                </li>
                <li>
                    C5
                </li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardDashboard;
