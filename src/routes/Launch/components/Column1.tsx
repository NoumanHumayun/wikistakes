import { Row } from "components/structural";
import { CustomButton } from "components/typography";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { ReactComponent as Back } from "assets/svg/arrowback.svg";
import { ChevronIcon } from "components/What/styled.components";
import { Bullets } from "./styled.component";
interface Column1Props {
  step: Number;
}

const Column1 = (props: Column1Props) => {
  const { step } = props;
  return (
    <>
      <Row>
        <Logo width="100%" style={{}} />
      </Row>
      <Row>
        <CustomButton
          fullWidth
          style={{ display: "flex", padding: "15px" }}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/";
          }}
        >
          <Back
            width="8%"
            style={{ marginRight: "10px", marginTop: "-4px" }}
            stroke="#000000"
            fill="#000000"
          />
          Back to HomePage
        </CustomButton>
      </Row>
      <Row style={{ margin: "20% 0 0 0" }}>
        <ChevronIcon />
        <Bullets style={{ marginLeft: "0" }} bold>
          Selected Official Rules
        </Bullets>
      </Row>
      <Row style={{ margin: "15% 0 0 0" }}>
        {step >= 2 && <ChevronIcon />}
        <Bullets bold style={{ marginLeft: step >= 2 ? "0" : "21.5%" }}>
          Kwiki Details
        </Bullets>
      </Row>
      <Row style={{ margin: "15% 0 0 0" }}>
        {step >= 3 && <ChevronIcon />}
        <Bullets bold style={{ marginLeft: step >= 3 ? "0" : "21.5%" }}>
          Contact Information
        </Bullets>
      </Row>
    </>
  );
};

export default Column1;
