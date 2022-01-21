import { createGlobalStyle } from "styled-components";
import ellipse from "assets/svg/Ellipse-2.svg";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'ITC Avant Garde Gothic Std Book';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000000;
    background-image: url(${ellipse});
    background-repeat: no-repeat;
    background-size: "50% 40%";
  }

  #root, #root > main {
    height: inherit;
  }

  #root > main {
    display: flex;
    flex-direction: column;
  }
  .upload-modal {
    span {
      width: 100%;
    }
    .ant-upload-text {
      font-size: 12px !important;
      line-height: 14px !important;
      color: rgba(0, 0, 0, 0.24) !important;
      margin: 0px 0px !important;
    }
    .ant-upload-drag-icon {
      margin-bottom: 3px !important;
    }
    .ant-upload.ant-upload-drag {
      border: 0.5px solid rgba(10, 5, 41, 0.32);
      box-sizing: border-box;
      border-radius: 8px;
      background: #F1F0F7;
      padding: 0px 17px;
      text-align: start;
      &:hover {
        border: 0.5px solid rgba(10, 5, 41, 0.32);
      }
    }
  }
`;
