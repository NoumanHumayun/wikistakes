import styled, { css } from "styled-components";
import { Input } from "antd";
import { Link as RouterLink } from "react-router-dom";

const statusColor = (status: any) => {
  switch (status) {
    case "applied":
      return "#d3d3d3";
    case "open":
      return "#28F461";
    case "shortlisted":
      return "#9631D5";
    case "draft":
    case "awaiting screen":
    case "client interview":
      return "#F6CE20";
    case "closed":
    case "review":
      return "rgba(0, 0, 0, 0.24)";
    case "canceled":
    case "phone screen":
      return "#F61C04";
    default:
      return "black";
  }
};

export const Status = styled.div`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  ::before {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    content: " ";
    margin-right: 10px;
    background-color: ${({ children }) => statusColor(children)};
  }
`;

export const PageHeading = styled.h1<{
  size: "small" | "large";
  margin?: string;
  justifyContent?:
    | "space-between"
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around";
}>`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;

  display: flex;
  align-items: center;
  max-width: 1028px;
  width: 100%;

  ${({ size, theme: { isDesktop } }) =>
    size === "large"
      ? css`
          font-size: 40px;
          line-height: 48px;
          margin: 64px auto 85px auto;
          justify-content: center;
        `
      : css`
          font-size: 24px;
          line-height: 28px;
          margin: ${isDesktop ? "80px auto 50px auto" : "40px 0px 30px 0px"};
          padding-left: 16px;
          justify-content: flex-start;
        `}

  text-align: center;
  letter-spacing: 0.04em;

  color: rgba(1, 1, 2, 0.96);
`;

export const CompanyJob = styled.div`
  border-bottom: 1px solid rgba(1, 1, 2, 0.96);
  color: rgba(1, 1, 2, 0.96);

  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 19px;

  letter-spacing: 0.02em;
  text-transform: capitalize;
`;

export const HeaderButtonText = styled.span`
  padding-right: 12px;
`;

export const BreadLink = styled(RouterLink)<{ width?: string }>`
  color: rgba(1, 1, 2, 0.96);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme: { isDesktop }, width }) =>
    isDesktop
      ? ""
      : css`
          width: ${width || "auto"};
        `}
`;

export const CardTitle = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: rgba(1, 1, 2, 0.96);
  margin: 6px 0px;
`;

export const Name = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: rgba(1, 1, 2, 0.96);
  margin: 6px 0px 0px 3px;
`;

export const CardLocation = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  display: flex;
  align-items: center;

  color: #777778;
  margin: 8px 0px;

  text-transform: capitalize;
`;

export const CardDate = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;

  color: #777778;
  margin: 6px 0px;
`;

export const H2 = styled.h2`
  font-family: "Tungsten Bold";
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 40px;
  color: #fff;
  text-transform: uppercase;
  margin: 0px;
  padding: 0px;
  letter-spacing: 0.02em;
`;

export const H3 = styled.h3`
  font-family: "Tungsten Bold";
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 40px;
  color: #fff;
  text-transform: uppercase;
  margin: 0px;
  padding: 0px;
  letter-spacing: 0.02em;
`;

export const H4 = styled.h3`
  font-family: "Gotham";
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 40px;
  color: #fff;
  text-transform: uppercase;
  margin: auto;
  text-align: center;
  letter-spacing: -0.1em;
`;

export const H5 = styled.h3`
  font-family: "Tungsten Bold";
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 40px;
  color: #fff;
  text-transform: uppercase;
  margin: 0px;
  padding: 0px;
  letter-spacing: 0.09em;
`;

export const Separator = styled.hr<{ margin?: string; color?: string }>`
  background-color: ${({ color }) => color || `rgba(196, 196, 196, 0.22)`};
  border: none;
  height: 1px;
  margin: ${({ margin }) => margin || "16px 0px"};
`;

export const Label = styled.label`
  font-family: "ITC Avant Garde Gothic Std Book";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #fff;
  margin: 0px;
`;

export const CustomLabel = styled.label<{
  fullWidth?: boolean;
  color?: string;
  bold?: string;
}>`
  font-weight: ${({ bold }) => bold ? "bold":  "500"};;
  font-size: 18px;
  line-height: 30px;
  color: ${({ color }) => color || "#FFFFFF"};
  word-break: break-word;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "80%")};
`;

export const Para = styled.p<{
  textAlign?: "center" | "right" | "left";
  margin?: string;
  width?: string;
}>`
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.06em;

  color: #fff;
  margin: ${({ margin }) => margin || "24px 0px"};
  padding: 0px;
  text-align: ${({ textAlign }) => textAlign || "left"};
  width: ${({ width }) => width || "auto"};

  > a {
    color: #0a0529;
  }
`;

export const Link = styled(RouterLink)`
  text-decoration: underline;
`;

export const H1 = styled.h2`
  font-family: "Tungsten Bold";
  font-style: normal;
  font-weight: bold;
  font-size: 70px;
  line-height: 60px;
  display: flex;
  color: #fff;
  text-transform: uppercase;
  margin: 0px;
  letter-spacing: 3px;
`;

export const Tag = styled.div`
  background: #f1f0f7;
  border: 0.5px solid rgba(10, 5, 41, 0.12);
  box-sizing: border-box;
  border-radius: 6px;
  padding: 8px 16px;

  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: #0a0529;
`;

export const ButtonText = styled.p`
  margin: 0px;
  ${({ theme: { isDesktop } }) =>
    isDesktop
      ? ``
      : css`
          display: none;
        `}
`;

export const TableText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #010102;
  display: flex;
  align-items: center;
`;

export const RowHeader = styled(TableText)`
  width: 100% !important;
  background-color: #f1f0f6;
  padding: 8px;
  padding-left: 24px;
  color: #777778;
  text-transform: uppercase;
`;

export const CandidateName = styled.p`
  margin: 0px 0px 0px 5px;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.02em;
  color: #0a0529;
  display: flex;
  align-items: center;
`;

export const ContentHeading = styled.p<{ uppercase?: boolean }>`
  margin: 0px;
  font-size: 16px;
  font-weight: 600;
  text-transform: ${({ uppercase }) => uppercase && "uppercase"};
  letter-spacing: 0.04em;
  color: rgba(1, 1, 2, 0.96);
  & > a {
    color: inherit;
  }
  & > svg,
  & > a > svg {
    margin-right: 10px;
    & > * {
      fill: currentColor;
      stroke: currentColor;
    }
  }
`;

export const ContentDescription = styled.p<{ color?: string; margin?: string }>`
  ${({ margin }) =>
    margin
      ? css`
          margin: ${margin};
        `
      : css`
          margin-bottom: 48px;
        `}
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: ${({ color }) => (color ? color : "rgba(1, 1, 2, 0.8)")};
  text-align: justify;
  white-space: pre-line;
`;

export const CompanyHeading = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  font: Lato;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  text-decoration-line: underline;
  color: rgba(1, 1, 2, 0.96);
`;

export const LogoType = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #777778;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const LogoName = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: rgba(1, 1, 2, 0.96);
  flex: none;
  order: 0;
  flex-grow: 0;
  text-transform: capitalize;
`;

export const TitleHeading = styled.p`
  margin-bottom: 8px;
  font-size: 32px;
  font-weight: 600;
  color: rgba(1, 1, 2, 0.96);
`;

export const HeaderLink = styled(Link)`
  position: static;
  text-decoration: none;
  display: flex;
  color: rgba(10, 5, 41, 0.32);
  font-weight: 400;
  font-size: 20px;
  align-items: center;
  letter-spacing: -0.01em;
  flex: none;
  &:hover {
    color: rgb(0, 0, 0);
  }
  ${({ theme: { isDesktop } }) =>
    !isDesktop
      ? css`
          font-size: 16px;
        `
      : css`
          margin-left: 32px;
          margin-bottom: 24px;
          &:first-child {
            margin-top: 50px;
          }
        `}
`;

export const JobLabel = styled(CustomLabel)`
  color: #010102;
`;

export const ProfileHeading = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  color: rgba(1, 1, 2, 0.96);
`;

export const AdditionalHeader = styled.h3`
  margin-top: 32px;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 4%;
  line-height: 19px;
  color: rgba(10, 5, 41, 0.32);
`;

export const PrefixInput = styled(Input)`
  width: 90px;
  height: 48px;
  background: #f1f0f7;
  border: 0.5px solid rgba(10, 5, 41, 0.12) !important;
  box-shadow: none !important;
  border-radius: 8px;
  padding-left: 12px;
  .ant-input {
    background: #f1f0f7;
  }
`;

export const LinkTitle = styled.label`
  position: static;
  width: 80px;
  height: 22px;
  left: 0px;
  top: 13px;
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: rgba(1, 1, 2, 0.96);
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;

export const NavLink = styled(RouterLink)<{
  uppercase?: boolean;
  invert?: boolean;
}>`
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: "#fff";
  text-transform: "uppercase";
`;
export const CustomButton = styled.button<{
  fullWidth?: boolean;
  color?: string;
}>`
  font-family: "ITC Avant Garde Gothic Std Book";
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  background: #ff8b00;
  height: 50px;
  letter-spacing: 3px;
  background: #ff8b00;
  border-radius: 100px;
  margin-top: 20px;
  cursor: pointer;
  color: ${({ color }) => color || "#000"};
  width: ${({ fullWidth }) => (fullWidth ? "90%" : "50%")};
`;

export const ResumeUpload = styled.p<{ margin?: string }>`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  letter-spacing: -0.01em;
  color: #0a0529;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: ${({ margin }) => (margin ? margin : "")};
  ${({ theme: { isDesktop } }) =>
    !isDesktop
      ? css`
          align-items: center;
          text-align: center;
          margin: 30px 0px 30px 72px;
        `
      : ``}
`;

export const ResumeText = styled.p<{ margin?: string }>`
  width: 280px;
  height: 17px;
  top: 27px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  letter-spacing: -0.01em;
  color: #777778;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: ${({ margin }) => (margin ? margin : "")};
`;
