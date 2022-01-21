import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  min-height: 80px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.24);
  padding: 0px 32px;
  .ant-menu-horizontal {
    border: 0px;
  }
  .ant-menu-item {
    color: rgba(10, 5, 41, 0.32);
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.04em;
    font-weight: 400;

    font-family: Lato;
    border-bottom: 0px !important;
    &:hover{
      border: 0px !important;
      color: #0A0529 !important;
      text-decoration: none;
    }
  }
  .ant-menu-item-selected {
    border: 0px !important;
    color: #0A0529 !important;
    font-weight: 700;
    text-decoration: none;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  font-size: 18px;
  line-height: 28px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: Lato;
`