import { Column, Row } from "components/structural";
import { H3, H4, Separator } from "components/typography";
import {
  CustomText,
  Para,
  CustomInput,
  CustomButton,
} from "./styled.components";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import social from "assets/png/social.png";
import { Image } from "antd";

interface FooterProps {
  ref?: any;
  forwardRef?: any;
  onChange?: any;
  value?: string;
  name?: string;
  background?: string;
  noBorder?: boolean;
  placeholder?: string;
}

const Footer = (props: FooterProps) => {
  return (
    <div
      style={{
        width: "80%",
        alignItems: "center",
        marginLeft: "10%",
      }}
    >
      <Row>
        <H4>our newsletter</H4>
        <CustomInput placeholder="EMAIL ADDRESS">
          
        </CustomInput>
        <CustomButton>SUBMIT NOW</CustomButton>
      </Row>
      <Separator />
      <Row
        style={{ width: "100%" }}
        margin="5% 0 0 0"
        justifyContent="center"
        gap="5%"
      >
        <Column width="20%">
          <Logo width="150%" />
          <CustomText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </CustomText>
        </Column>
        <Column width="20%" >
          <CustomText head={true}>RESOURCES</CustomText>
          <br />
          <CustomText>Pricing</CustomText>
          <CustomText>Blog</CustomText>
          <CustomText>Support</CustomText>
          <CustomText>Register</CustomText>
        </Column>
        <Column width="20%" >
          <CustomText head>LEGAL</CustomText>
          <br />
          <CustomText>Privacy</CustomText>
          <CustomText>Policy</CustomText>
          <CustomText>Terms</CustomText>
        </Column>
        <Column width="20%">
          <CustomText head>SOCIAL MEDIA</CustomText>
          <Image src={social} />
        </Column>
      </Row>
      <Separator />
      <Row style={{ width: "100%" }}>
        <Para>Copyright &copy; KWIKISWEEPS all rights reserved</Para>
      </Row>
    </div>
  );
};

export default Footer;
