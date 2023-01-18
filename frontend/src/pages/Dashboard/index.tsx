import { Card, Row, Col } from "react-bootstrap";

import { Title } from "../../components";

const Dashboard = () => {
  return (
    <>
      <Title title="dashboard" />
      <Row className="mt-3">
        <Col>
          <Card border="success">
            <Card.Header>Clientes atuais</Card.Header>
            <Card.Body>
              <Card.Title>
                <h1 className="text-center">25</h1>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="secondary">
            <Card.Header>Atividades totais</Card.Header>
            <Card.Body>
              <Card.Title>
                <h1 className="text-center">256</h1>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="warning">
            <Card.Header>Atividades Urgentes</Card.Header>
            <Card.Body>
              <Card.Title>
                <h1 className="text-center">25</h1>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="danger">
            <Card.Header>Atividades Atrasadas</Card.Header>
            <Card.Body>
              <Card.Title>
                <h1 className="text-center">2</h1>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
