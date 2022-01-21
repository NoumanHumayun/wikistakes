import React, { useState } from "react";
import { Container } from "components/structural";
import { Row, Col } from "antd";
import GenericLoader from "components/GenericLoader";
import Column1 from "../components/Column1";
import Column2 from "../components/Column2";
import Column3 from "../components/Column3";

const LaunchContainer = () => {
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const [stepCount, setStepCount] = useState(1);
  if (isLoading)
    return (
      <Container>
        <GenericLoader invert />
      </Container>
    );
  return (
    <Row style={{ height: "100vh" }}>
      <Col
        xs={24}
        xl={6}
        style={{ backgroundColor: "#1C1C1C", padding: "20px" }}
      >
        <Column1 step={stepCount} />
      </Col>
      <Col xs={24} xl={8} style={{ backgroundColor: "#2A2A2A" }}>
        <Column2 step={stepCount} />
      </Col>
      <Col xs={24} xl={10} style={{ backgroundColor: "#3E3E3E" }}>
        <Column3 step={stepCount} setStep={setStepCount} />
      </Col>
    </Row>
  );
};

export default LaunchContainer;
