import Container from "./containers";

interface CreateJobProps {
  visible: boolean;
  handleCloseModal: () => void;
}

const View = (props: CreateJobProps) => {
  const {
    ...rest
  } = props
  return <Container {...rest} />;
};

export default View;
