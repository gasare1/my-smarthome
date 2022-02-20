import React from "react";
import { Card } from "react-bootstrap";
function Dashboard4() {
  return (
    <div >
      <Card style={{ width: "200px",height:'200px',justifyContent:'center',display:'flex',alignItems:'center' }}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Dashboard4;