import styled from "styled-components";
import { Modal } from "components/structural";
import Button from "components/button/primary";
import { Input, Switch } from "antd";
import { ReactComponent as Close } from "assets/svg/close.svg";
import { ReactComponent as Resume } from "assets/svg/resume.svg";

export const UploadResumeModal = styled(Modal)<{ align?: string }>`
  text-align: ${({ align }) => (align ? align : "center")};
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

export const UploadButton: any = styled(Button)`
  border: 1px solid rgba(1, 1, 2, 0.96);
  background: #0a0529;
  color: #fff;
  padding: 20px 16px;
  width: 100%;
  margin-bottom: 8px;
`;

export const CancelButton:any = styled(Button)`
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

export const LinkText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #0a0529;
  margin: 0px;
  > a, span {
    margin: 0px 24px;
    color: #0a0529;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const SelectedFile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #f1f0f7;
  border: 0.5px solid rgba(10, 5, 41, 0.32);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 17px;
`;

export const FileTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  padding: 5px;
  cursor: pointer;
`;

export const CloseIcon = styled(Close)`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

export const ResumeIcon = styled(Resume)``;

export const FileText = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: rgba(1, 1, 2, 0.96);
  margin: 0px 10px;
`;

export const ToggleSwitch = styled(Switch)`
  background: #c4c3cc;
  width: 32px;
  height: 14px;
  border: 0px solid #c4c3cc !important;
  box-shadow: none !important;
  .ant-switch-handle::before {
    background-color: #0a0529;
    width: 20px;
    height: 20px;
    top: -4px;
    left: -1px;
    :checked {
      background-color: red;
    }
  }
`;
