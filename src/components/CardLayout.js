import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

export default props => {
  return (
    <Container className="height-fixer d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <Card>
            <CardBody>{props.children}</CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
