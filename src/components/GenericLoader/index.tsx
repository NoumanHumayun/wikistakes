import { Container, Dot } from "./styled.components";

export interface GenericLoaderProps {
  invert?: boolean;
  small?: boolean;
}

const GenericLoader: React.FC<GenericLoaderProps> = ({
  invert,
  small = false,
}) => {
  return (
    <Container small={small} className={(invert && "invert") || ""}>
      <Dot small={small} className="dot" />
      <Dot small={small} className="dot" />
    </Container>
  );
};

export default GenericLoader;
