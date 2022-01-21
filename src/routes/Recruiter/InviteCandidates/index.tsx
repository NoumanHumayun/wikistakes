import React from "react";
import Container from "./containers";

interface CreateJobProps {
  visible: boolean;
  handleCloseInviteCandidate: () => void;
}

const View = (props: CreateJobProps) => {
  const {
    ...rest
  } = props
  return <Container {...rest} />;
};

export default View;
