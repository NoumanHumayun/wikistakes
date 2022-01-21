import styled, { createGlobalStyle } from "styled-components";

export const TooltipGlobal = createGlobalStyle`
  .ant-popover-arrow {
    
  }

  .ant-popover.ant-popover-placement-bottom {
    top: 35px !important;
  }
`;

export const PopoverContainer = createGlobalStyle`
  .ant-popover-inner {
    border-radius: 8px;
    background: #fff;
    border: 0.5px solid rgba(10, 5, 41, 0.32);
  }
  
  .ant-popover-inner-content {
    padding: 0px;
  }
`;

export const ListItem = styled.div`
  cursor: pointer;
  display: flex;
  border-bottom: 2px solid #f5f5f5;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  min-width: 120px;
  min-height: 40px;
  &:hover {
    background: #f5f5f5;
  }
`;
