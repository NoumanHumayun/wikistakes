import featured1 from "assets/png/featured1.png";
import featured2 from "assets/png/featured2.png";
import featured3 from "assets/png/featured3.png";
import { Column, Row } from "components/structural";
import { Button, ButtonText, Dot, ImageContainer } from "./styled.components";
import { H1 } from "components/typography";

interface FeaturedProps {
  ref?: any;
  forwardRef?: any;
  onChange?: any;
  value?: string;
  name?: string;
  background?: string;
  noBorder?: boolean;
  placeholder?: string;
  refName?: string;
}

const Featured = (props: FeaturedProps) => {
  return (
    <div
      style={{
        borderRadius: "2%",
        padding: "2%",
        width: "100%",
      }}
      id={props.refName}
    >
      <Row>
        <H1>Featured </H1>
      </Row>
      <Row>
        <H1 style={{ color: "#FF8B00" }}>KWIKIS</H1>
      </Row>
      <Row margin="5% 0 0 0" justifyContent="center">
        <Column width="25%">
          <ImageContainer src={featured1} />
          <Button>
            <Dot />
            <ButtonText>ASK A QUESTION</ButtonText>
          </Button>
        </Column>
        <Column width="25%">
          <ImageContainer src={featured2} />
          <Button>
            <Dot />
            <ButtonText>ASK A QUESTION</ButtonText>
          </Button>
        </Column>
        <Column width="25%">
          <ImageContainer src={featured3} />
          <Button>
            <Dot />
            <ButtonText>ASK A QUESTION</ButtonText>
          </Button>
        </Column>
      </Row>
    </div>
  );
};

export default Featured;
