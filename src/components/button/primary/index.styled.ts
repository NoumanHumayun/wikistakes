import { Link as RouterLink } from "react-router-dom";
import styled, { css } from "styled-components";
import readableColor from "polished/lib/color/readableColor";
import darken from "polished/lib/color/darken";

export const Button = styled.button<any>`
  ${(props) => {
    const { disabled, loading, theme, width, padding } = props;
    const background = props.background || theme?.colors?.primary;
    const color = props.color || readableColor(background);
    return `
      ${width ? `width: ${width};` : ``}
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: bold;
      color: ${disabled ? "#ffffff" : color};
      background: ${disabled ? "#c5c5c5" : background};
      border: ${disabled ? "1px solid #c5c5c5" : `1px solid ${background}`};
      padding: ${padding ? padding : "14.5px 24.5px"};
      border-radius: 8px;
      transition: all 0.25s;
      pointer-events: ${disabled ? "none" : "auto"};
      overflow: hidden;
      max-width: 100%;
      cursor: ${disabled || loading ? "not-allowed !important" : "pointer"};
      white-space: pre;
      line-height: 1;
      outline-color: #2D4582;
      outline: 0px;
      svg {
        fill: ${disabled ? "#ffffff" : color};
      }
      &:hover {
        background: ${props.background || darken(0.1, background)};
        color: ${color};
        border: ${
          disabled
            ? "1px solid #c5c5c5"
            : `1px solid ${darken(0.05, background)}`
        };
        svg {
          fill: ${color};
        }
      }
      &:focus {
        background: ${props.background || darken(0.1, background)};
        color: ${color};
        border: ${
          disabled
            ? "1px solid #c5c5c5"
            : `1px solid ${darken(0.05, background)}`
        };
        svg {
          fill: ${color};
        }
      }
      ${({ theme: { isDesktop } }: any) =>
        !isDesktop
          ? css`
              padding: ${padding ? padding : "15px"};
            `
          : ``}
    `;
  }}
`;

export const Link = styled(RouterLink)<any>`
  ${(props) => {
    const { disabled, loading, theme, width, padding } = props;
    const background = props.background || theme?.colors?.primary;
    const color = props.color || readableColor(background);
    return `
      ${width ? `width: ${width};` : ``}
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: bold;
      color: ${disabled ? "#ffffff" : color};
      background: ${disabled ? "#c5c5c5" : background};
      border: ${disabled ? "1px solid #c5c5c5" : `1px solid ${background}`};
      padding: ${padding ? padding : "14.5px 24.5px"};
      border-radius: 8px;
      transition: all 0.25s;
      pointer-events: ${disabled ? "none" : "auto"};
      overflow: hidden;
      max-width: 100%;
      cursor: ${disabled || loading ? "not-allowed !important" : "pointer"};
      white-space: pre;
      line-height: 1;
      outline-color: #2D4582;
      outline: 0px;
      svg {
        fill: ${disabled ? "#ffffff" : color};
      }
      &:hover {
        background: ${props.background || darken(0.1, background)};
        color: ${color};
        border: ${
          disabled
            ? "1px solid #c5c5c5"
            : `1px solid ${darken(0.05, background)}`
        };
        svg {
          fill: ${color};
        }
      }
      &:focus {
        background: ${props.background || darken(0.1, background)};
        color: ${color};
        border: ${
          disabled
            ? "1px solid #c5c5c5"
            : `1px solid ${darken(0.05, background)}`
        };
        svg {
          fill: ${color};
        }
      }
      ${({ theme: { isDesktop } }: any) =>
        !isDesktop
          ? css`
              padding: ${padding ? padding : "15px"};
            `
          : ``}
    `;
  }}
`;
