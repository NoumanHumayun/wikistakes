import styled from "styled-components";
import Switch from "antd/lib/switch";
import Button from "components/button/primary";
import { SelectInput as Select } from "components/SelectInput";
import { ReactComponent as Close } from "assets/svg/close.svg";
import { ReactComponent as Resume } from "assets/svg/resume.svg";

export const SelectInput = styled(Select)`
  margin-left: 0px;
  width: 100%;
  height: 52px !important;
  
  .ant-select-arrow {
    top: 50%;
    right: 12px;
  }

  .ant-select-arrow:hover {
    display: none;
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

export const LinkText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #0a0529;
  margin: 0px;
  > a {
    margin: 0px 24px;
    color: #0a0529;
    text-decoration: underline;
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
  padding: 8px;
  min-height: 52px;
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
