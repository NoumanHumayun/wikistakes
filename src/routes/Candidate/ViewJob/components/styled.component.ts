import styled from "styled-components";
import Button from "components/button/primary";
import { Row, Column } from "components/structural";
import { Link } from "react-router-dom";

export const JobContainer = styled.div`
  max-width: 876px;
  width: 100%;
  padding: 24px;
  margin: 0 auto;
  @media (max-width: 576px) {
    padding: 0px;
  }
`;

export const CustomRow = styled(Row)`
  justify-content: flex-start;
  
  
  @media (max-width: 576px) {
    flex-direction: row !important;
    margin-top: 12px;
    margin-bottom: 0px;
  }
`;

export const CustomColumn = styled(Column)`
  flex-direction: row;
  align-items: flex-end;
  row-gap: 32px;
  @media (max-width: 576px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const EditButtonColumn = styled(Column)`
  width: 100%;
  @media (max-width: 576px) {
    padding: 16px;
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

export const ApplicantsButton = styled(Button)`
  background: #0a0529;
  color: #fff;
  padding: 16px;
  &:focus {
    border-radius: 8px;
    outline: 0px;
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

export const ButtonText = styled.p<{webonly?: boolean}>`
  margin: 0px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  @media (max-width: 576px) {
    display: ${({webonly}) => webonly && 'none'};
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
  background: rgba(255, 255, 255, 0.56);
  border-radius: 50%;
  margin-right: 8px;
  display: inline-flex;
`;
