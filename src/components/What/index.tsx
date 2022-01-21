import who from "assets/png/Ellipse-2.png";
import { Column, Row } from "components/structural";
import { H4 } from "components/typography";
import {
  Header,
  Para,
  ChevronIcon,
  ExclaimIcon,
  WarnText,
} from "./styled.components";

interface WhatProps {
  ref?: any;
  forwardRef?: any;
  onChange?: any;
  value?: string;
  name?: string;
  background?: string;
  noBorder?: boolean;
  placeholder?: string;
}

const What = (props: WhatProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${who})`,
        borderRadius: "2%",
        padding: "2%",
        width: "100%",
      }}
    >
      <Row style={{ width: "100%" }}>
        <H4>What services does</H4>
      </Row>
      <Row>
        <H4>
          <span style={{ color: "#FF8B00" }}>KWIKISWEEPS </span>provide ?
        </H4>
      </Row>
      <Row margin="5% 0 0 5%" justifyContent="center" gap="0px">
        <Column width="50%" margin="0px">
          <Header>We take care of</Header>
        </Column>
        <Column width="50%">
          <Header background="#3E3E3E">&nbsp;</Header>
        </Column>
      </Row>
      <Row margin="0 0 0% 5%" justifyContent="center" gap="0px">
        <Column width="50%">
          <Para background="#1C1C1C">
            <ChevronIcon />
            Campaign design, launch and management
            <br />
            <ChevronIcon />
            Creation of your customized kwiki webpage
            <br />
            <ChevronIcon />
            Design of official rules and disclaimers
            <br />
            <ChevronIcon />
            Social media and other promotional guidelines
            <br />
            <ChevronIcon />
            Participant entries and payments
            <br />
            <ChevronIcon />
            Winner selection, notification and verification
            <br />
            <ChevronIcon />
            Posting and recordkeeping requirements
            <br />
            <ChevronIcon />
            Customer support for all inquiries
          </Para>
        </Column>
        <Column width="50%">
          <Para background="#2A2A2A" style={{ padding: "32.3%" }}>
            &nbsp;
          </Para>
        </Column>
      </Row>
      <Row margin="0 0 0% 5%" gap="0px">
        <WarnText>
          <ExclaimIcon />
          Sweepstake registration, bonding and insurance requirements vary by
          state. Winner 1099 IRS compliance may be required. Kwikisweeps will
          manage all requirements as necessary
        </WarnText>
      </Row>
    </div>
  );
};

export default What;
