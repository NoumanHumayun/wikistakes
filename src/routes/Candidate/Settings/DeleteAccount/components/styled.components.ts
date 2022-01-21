import styled from "styled-components";
import { Modal } from "components/structural";
import Button from "components/button/primary";
import { Input, Switch } from "antd";
import { ReactComponent as Close } from "assets/svg/close.svg";
import { ReactComponent as Resume } from "assets/svg/resume.svg";


export const InviteCandidateModal = styled(Modal)`
  @media (max-width: 576px) {
    width: 100% !important;
    max-width: 100% !important;
    margin: 10px 0 0 !important;
    .ant-modal-content {
      padding: 64px 48px 28px;
      /* border-radius: 0px; */
    }

    @media (max-width: 576px) {
      .ant-modal-content {
        padding: 48px 24px;
        margin: 0px 10px;
      }
    }
  }
`;

export const UploadButton = styled(Button)`
  border: 1px solid rgba(1, 1, 2, 0.96);
  background: #0a0529;
  color: #fff;
  padding: 20px 16px;
  width: 100%;
  margin-bottom: 8px;
`;

export const CancelButton = styled(Button)`
  border: 0px;
  background: #fff;
  color: #010102;
  padding: 20px 16px;
  width: 100%;
  &:hover {
    background: #0a0529;
    color: #fff;
  }
`;

export const Para = styled.p<{ margin?: string; mini?: boolean }>`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  line-height: 24px;
  color: #777778;
  margin: ${({ margin }) => (margin ? margin : "24px 0px")};
  padding: 0px;
  width: ${({ mini }) => mini && "80%"};
  > a {
    color: #0a0529;
  }
  @media (max-width: 576px) {
    width: ${({ mini }) => mini && "70%"};
  }
`;
