import rocket from "assets/svg/rocket.svg";
import speaker from "assets/svg/speaker.svg";
import media from "assets/svg/media.svg";
import paid from "assets/svg/paid.svg";
import { Row } from "components/structural";
import { H4 } from "components/typography";
import TabBadge from "components/TabBadge";

interface HowProps {
  ref?: any;
  forwardRef?: any;
  onChange?: any;
  value?: string;
  name?: string;
  background?: string;
  noBorder?: boolean;
  placeholder?: string;
}

const How = (props: HowProps) => {
  return (
    <div
      style={{
        borderRadius: "2%",
        padding: "2%",
        width: "100%",
      }}
    >
      <Row style={{ width: "100%" }}>
        <H4>How Do I launch a </H4>
      </Row>
      <Row>
        <H4 style={{ color: "#FF8B00" }}>KWIKI ?</H4>
      </Row>
      <Row style={{ width: "100%" }} margin="5% 0 0 0" justifyContent="center">
        <TabBadge placeholder="Launch a kwiki sweepstake" background={rocket} />
        <TabBadge placeholder="Promote your kwiki" background={speaker} />
        <TabBadge placeholder="video call with winner" background={media} />
        <TabBadge placeholder="get paid" background={paid} />
      </Row>
    </div>
  );
};

export default How;
