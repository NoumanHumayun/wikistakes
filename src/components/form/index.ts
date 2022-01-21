import styled, { css } from "styled-components";
import CheckboxAntd from "antd/es/checkbox/Checkbox";
import AntInput from "antd/lib/input";

import AntSelect from "antd/lib/select";
export const Select = styled(AntSelect)`
  flex: 1;

  & * {
    font-family: "ITC Avant Garde Gothic Std Book";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    letter-spacing: 0.01em;
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const Input = styled.input<{ phcolor?: string, width?: string }>`
  width: inherit;
  height: 40px;
  width: ${({ width }) => width || "100vh"};
  background: #f1f0f7;

  border: 0.5px solid rgba(10, 5, 41, 0.12);
  box-sizing: border-box;
  border-radius: 20px;

  font-family: "ITC Avant Garde Gothic Std Book";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  letter-spacing: 0.01em;
  color: rgba(0, 0, 0, 0.8);
  padding-left: 12px;
  ::placeholder {
    color: ${({ phcolor }) => phcolor || "rgba(10, 5, 41, 0.32)"};
  }
`;

export const PrefixInput = styled(AntInput)`
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

export const LinkInput = styled.input<any>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 8px 4px 16px;
  position: static;
  width: 528px;
  height: 48px;
  background: #f1f0f7;
  border: 0.5px solid rgba(10, 5, 41, 0.32);
  box-sizing: border-box;
  border-radius: 8px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 8px 0px;

  ${({ theme: { isDesktop } }) =>
    isDesktop
      ? ``
      : css`
          width: 263px;
          height: 48px;
        `}
`;

export const TextArea = styled.textarea<any>`
  width: 65vh;
  height: 48px;

  background: #f1f0f7;
  border: 0.5px solid rgba(10, 5, 41, 0.32);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px 12px;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  letter-spacing: 0.01em;
  color: rgba(0, 0, 0, 0.8);
  padding-left: 12px;
  resize: none;
  min-height: 8rem;
  ::placeholder {
    color: rgba(0, 0, 0, 0.24);
  }
`;

export const Checkbox = styled(CheckboxAntd)`
  & .ant-checkbox-inner {
    border: 1px solid #dadada;
  }
`;
