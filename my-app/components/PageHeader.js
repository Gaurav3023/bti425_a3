import React from 'react';
import { Card } from 'react-bootstrap';

const PageHeader = ({ text }) => {
  return (
    <div>
      <Card className="bg-light">
        <Card.Body>
          {text}
        </Card.Body>
      </Card>
      <br />
    </div>
  );
};

export default PageHeader;
