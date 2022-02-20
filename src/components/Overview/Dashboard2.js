import React from "react";
import { Card } from "react-bootstrap";
import Dashboard3 from "./Dashboard3";
import Dashboard4 from "./Dashboard4";
import {IoMdSettings} from 'react-icons/io'
function Dashboard2() {
  return (
    <div style={{position:'relative',width:'7rem',marginTop:'62px'}}>
      <Card style={{ width: "420px",height:'250px'}}>
      <div style={{justifyContent:'flex-end',display:'flex',alignItems:'flex-end',fontSize:'30px',}}><IoMdSettings /></div>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div  style={{marginTop:'10.2rem',flexDirection:'row',justifyContent:'center',display:"flex"}}><Dashboard4 /> <Dashboard3 /></div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Dashboard2;
