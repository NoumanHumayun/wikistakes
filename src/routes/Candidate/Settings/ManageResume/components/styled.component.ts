import styled from "styled-components";
import Button from "components/button/primary";
import { Row, Column } from "components/structural";
import Select from "antd/lib/select";
import { Link } from "react-router-dom";

export const JobContainer = styled.div`
  max-width: 876px;
  width: 100%;
  margin: 0 auto;
`;

export const CustomRow = styled(Row)<{ column?: boolean }>`
  align-items: flex-start;

  @media (max-width: 576px) {
    flex-direction: ${({ column }) => (column ? "column" : "row")} !important;
    margin: 10px;
  }
`;

export const CustomColumn = styled(Column)`
  flex-direction: row;
  align-items: flex-end;
  align-self: center;

  @media (max-width: 576px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const AvatarRow = styled(CustomRow)`
  @media (max-width: 576px) {
    margin-left: 5px;
  }
`;

export const AvatarColumn = styled(Column)`
  @media (max-width: 576px) {
  }
`;

export const BackLink = styled(Link)`
  margin-right: auto;
  display: flex;
  color: rgba(1, 1, 2, 0.96);
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  align-items: center;
  letter-spacing: -0.01em;
  &:hover {
    color: rgba(1, 1, 2, 0.96);
  }

  & > svg {
    margin-right: 15px;
  }
`;

export const LinkText = styled.p`
  margin: 0px;
  margin-left: 20px;
  @media (max-width: 576px) {
    display: none;
  }
`;

export const ApplicantsButton = styled(Button)`
  background: #0a0529;
  color: #fff;
  &:focus {
    border-radius: 8px;
    outline: 0px;
  }
`;

export const EditButton = styled(Button)`
  background: #fff;
  border: 0px;
  color: #0a0529;
  padding: 16px;
  font-size: 16px;
  font-weight: 500;

  &:focus {
    border-radius: 8px;
    outline: 0px;
  }
`;

export const ButtonText = styled.p<{ webonly?: boolean }>`
  margin: 0px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  @media (max-width: 576px) {
    display: ${({ webonly }) => webonly && "none"};
  }
`;

export const SelectInput = styled(Select)`
  min-width: 310px;
  height: 48px !important;
  margin-left: 8px;
  display: flex;
  align-items: center;
  background: #fff;

  border: 0.5px solid rgba(10, 5, 41, 0.32);
  box-sizing: border-box;
  border-radius: 8px;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  letter-spacing: 0.01em;
  color: rgba(0, 0, 0, 0.8);
  padding-left: 4px;

  .ant-select-selector {
    border: 0px !important;
    background-color: transparent !important;
    outline: 0px !important;
    box-shadow: none !important;
    height: 48px;
  }
  .ant-select-selection-placeholder {
    color: #010102;
    font-size: 14px;
    font-weight: 400;
  }
  .ant-select-clear {
    background: transparent;
  }
  .ant-select-arrow {
    top: 40%;
    right: 15px;
  }
  @media (max-width: 576px) {
    margin-right: 16px;
    width: 100%;
  }
`;

export const OpenStatus = styled.div`
  width: 8px;
  height: 8px;
  background: #28f461;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-flex;
`;

export const ClosedStatus = styled.div`
  width: 8px;
  height: 8px;
  background: rgba(0, 0, 0, 0.24);
  border-radius: 50%;
  margin-right: 8px;
  display: inline-flex;
`;

export const JobPostingCard = styled.div`
  padding: 96px 64px 48px;
  margin-top: 12px;
  border-radius: 16px;
  background-color: #fff;
  @media (max-width: 576px) {
    padding: 56px 16px;
    border-radius: 0px;
  }
`;

export const ImageContainer = styled.div<{ src: string }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #f1f0f7;
  border: 0.5px solid rgba(10, 5, 41, 0.32);
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ src }) => src || ""});
`;

export const JobTitleHeading = styled.p`
  margin-bottom: 15px;

  font-size: 32px;
  font-weight: 700;
  color: rgba(1, 1, 2, 0.96);
`;

export const Tags = styled.div`
  padding: 8px 16px;
  margin-bottom: 8px;

  font-weight: 600;
  font-size: 14px;
  color: #0a0529;

  background: #f1f0f7;
  border: 0.5px solid rgba(10, 5, 41, 0.12);
  border-radius: 6px;
`;

export const ContentHeading = styled.p<{ uppercase?: boolean }>`
  margin: 0px;

  font-size: 16px;
  font-weight: bold;
  text-transform: ${({ uppercase }) => uppercase && "uppercase"};
  letter-spacing: 0.04em;
  color: rgba(1, 1, 2, 0.96);
`;

export const ContentDescription = styled.p<{ color?: string; top?: boolean }>`
  margin-bottom: 48px;
  margin-top: ${({ top }) => top && "50px"};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: ${({ color }) => (color ? color : "rgba(1, 1, 2, 0.8)")};
  text-align: justify;
`;
