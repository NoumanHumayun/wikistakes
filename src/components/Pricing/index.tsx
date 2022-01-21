import {
  ImageContainer,
  Para,
  ChevronIcon,
  ButtonGroup,
  ButtonG,
  Span,
} from "./styled.components";

import pricing from "assets/png/pricing.png";
import { Column, Row } from "components/structural";
import { H4, H3 } from "components/typography";

interface PricingProps {
  ref?: any;
  forwardRef?: any;
  onChange?: any;
  value?: string;
  name?: string;
  background?: string;
  noBorder?: boolean;
  placeholder?: string;
}

const Pricing = (props: PricingProps) => {
  return (
    <div
      style={{
        borderRadius: "2%",
        padding: "2%",
        width: "100%",
      }}
    >
      <Row style={{ width: "100%" }}>
        <H4 style={{ color: "#FF8B00" }}>How does</H4>
      </Row>
      <Row>
        <H4>
          <span style={{ color: "#FF8B00" }}>KWIKI</span> pricing work ?
        </H4>
      </Row>
      <Row style={{ margin: "10% 0" }} gap="0px">
        <Column style={{ maxWidth: "35%" }}>
          <ImageContainer src={pricing} />
        </Column>
        <Column>
          <Para>
            For followers, who enter into you kwiki, they choose among five
            payment amounts:
          </Para>
          <ButtonGroup>
            <ButtonG>$2</ButtonG>
            <ButtonG>$5</ButtonG>
            <ButtonG>$10</ButtonG>
            <ButtonG>$20</ButtonG>
            <ButtonG>$200</ButtonG>
          </ButtonGroup>
          <Para>For you, Kwikisweeps will charge:</Para>
          <Para>
            <ChevronIcon />
            <Span>
              $89 administrative fee to setup and manage your campaign, plus
            </Span>
            <br />
            <ChevronIcon />
            <Span>
              20% of the total money raised after the administrative fee
            </Span>
            <br />
            <ChevronIcon />
            <Span>Kwikisweeps never charges fees upfront</Span>
            <br />
            <ChevronIcon />
            <Span>
              All fees are automatically subtracted from your campaign
            </Span>
            <br />
            <ChevronIcon />
            <Span>
              If your campaign fails to raise enough money to cover the
            </Span>
            <Span indent="35px">
              administrative fee for any reason, Kwikisweeps will not charge you
              the
            </Span>
            <Span indent="35px">difference</Span>
            <br />
            <ChevronIcon />
            <Span>
              Note, if your campaign receives any participants you are required
              to
            </Span>
            <Span indent="35px">
              fulfill the 30-minute video call with the winner, regardless of
              how much{" "}
            </Span>
            <Span indent="35px">money was raised</Span>
          </Para>
        </Column>
      </Row>
    </div>
  );
};

export default Pricing;
