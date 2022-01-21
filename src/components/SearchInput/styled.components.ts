import styled, { css } from "styled-components";
import AntInput from "antd/lib/input";

export const Input = styled(AntInput)<any>`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  background: ${({ background }) => (background ? background : "#FFFFFF")};
  border: ${({ noBorder }) => noBorder && "none"};
  border-radius: 8px;
  padding: 8px 16px 8px 16px;
  .ant-input {
    background: ${({ background }) => (background ? background : "#FFFFFF")};
  }
  .ant-input:placeholder-shown::placeholder {
    color: rgba(1, 1, 2, 0.96) !important;
    font-size: 14px;
  }
  svg {
    height: 20px;
    width: 20px;
    margin-right: 8px;
  }

  ${({ theme: { isDesktop } }) =>
    isDesktop
      ? css`
          max-width: 300px;
        `
      : css`
          margin: 16px;
          max-width: 92%;
        `}
`;
