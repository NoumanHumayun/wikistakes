import styled, { css } from "styled-components";
import AntSelect from "antd/lib/select";


export const SelectInput = styled(AntSelect)`
  min-width: 160px;
  height: 48px !important;
  margin-left: 8px;
  display: flex;
  align-items: center;
  background: #ffffff;

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
`;

export const Select = styled(AntSelect)<{
  width?: string;
  topborder?: boolean;
}>`
  .ant-select-selector {
    border: 0px !important;
    background-color: transparent !important;
    outline: 0px !important;
    box-shadow: none !important;
  }
  .ant-select-selection-placeholder {
    color: #000;
    font-size: 14px;
    font-weight: 400;
  }

  .ant-select-arrow {
    top: 10px;
    ${({ theme: { isDesktop } }) =>
      isDesktop
        ? ""
        : css`
            top: 20px;
            right: 17px;
          `}
  }

  .ant-select-clear {
    ${({ theme: { isDesktop } }) =>
      isDesktop
        ? css`
            right: 5px;
          `
        : ""}
  }

  .ant-select-dropdown {
    border-radius: 5px;
    background: #ffffff;
    padding: 0px;
    border: 0.5px solid rgba(10, 5, 41, 0.32);
    min-width: 120px !important;
  }
  .ant-select-dropdown .ant-select-item-option-content {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: rgba(1, 1, 2, 0.96);
    text-align: left;
  }
  .ant-select-item {
    padding: 12px 8px;
  }
  &:focus {
    outline: 0px;
  }
  ${({ theme: { isDesktop }, topborder }) =>
    isDesktop
      ? css`
          margin-left: 30px;
        `
      : css`
          width: 100%;
          border-top: ${topborder
            ? "0.1px solid rgba(10, 5, 41, 0.32)"
            : "0px"};
          border-bottom: 0.5px solid rgba(10, 5, 41, 0.32);
          padding: 10px 0px;
        `}
`;
