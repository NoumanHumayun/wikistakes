import styled, { css } from "styled-components";
import AntSelect from "antd/es/select";
import { Modal } from "components/structural";
import Button from "components/button/primary";

export const CloseIconContainer = styled.div`
  position: fixed;
  top: 42px;
  left: 42px;
  cursor: pointer;
  z-index: 1000;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #f1f0f7;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 14px;
    height: 14px;
  }
  @media (max-width: 576px) {
    top: 25px;
    left: 15px;
  }
`;

export const CreateJobModal = styled(Modal)<{ loading?: boolean }>`

  .ant-modal-close {
    top: -50px;
    left: 0px;
  }

  ${({ loading }) =>
    loading
      ? css`
          top: 45%;
          .ant-modal-close{
            display: none;
          }

          .ant-modal-content {
            box-shadow: none;
            background: transparent;
          }
        `
      : ``}

  ${({ theme: { isDesktop } }) =>
    isDesktop
      ? ``
      : css`
          width: 100% !important;
          max-width: 100% !important;
          margin: 10px 0 0 !important;
          & .ant-modal-content {
            padding: 32px 16px 28px;
            border-radius: 0px;
          }
        `}
`;

export const ImageContainer = styled.div<{ src: string }>`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #f1f0f7;
  border: 0.5px solid rgba(10, 5, 41, 0.32);
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ src }) => src || ""});
`;

export const ImageDataContainer = styled.div`
  display: inline-flex;
  margin-left: 15px;
`;

export const CompanyHeading = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  color: rgba(1, 1, 2, 0.96);
`;

export const UploadImage = styled.p`
  margin-bottom: 0px;
  font-size: 14px;
  color: #0a0529;
  text-decoration: underline;
  cursor: pointer;
`;

export const UploadInput = styled.input`
  display: none;
`;

export const Select = styled(AntSelect)`
  width: inherit;
  height: 48px;

  background: #f1f0f7;

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
    color: rgba(0, 0, 0, 0.24);
    font-size: 14px;
    font-weight: 400;
  }
  .ant-select-selection-item {
    background: #fff !important;
  }
  .ant-select-clear {
    background: transparent;
  }
`;

export const ScheduleButton = styled(Button)`
  border: 1px solid rgba(1, 1, 2, 0.96);
  background: transparent;
  color: rgba(1, 1, 2, 0.96);
  padding: 14.5px 42px;
`;
