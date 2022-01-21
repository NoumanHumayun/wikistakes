import styled from "styled-components";
import { ReactComponent as Burger } from "assets/svg/burger.svg";
import { Label } from "components/typography";
import { Row, Column } from "components/structural";


export const TableCardContent = styled.div<{ flex?: boolean }>`
  margin-top: 16px;
  align-items: center;
  justify-content: space-between;
  ${({ flex }) => flex && `display: flex`}
`;

export const CandidateContainer = styled.div<{ gap?: string }>`
  align-items: center;
  gap: ${({ gap }) => gap || "5px"};
  justify-content: space-between;
  display: flex;
`;

export const NavLabel = styled(Label)`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

export const BurgerMenu = styled(Burger)`
  margin-right: 18px;
  cursor: pointer;
  @media (min-width: 577px) {
    display: none;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1024px;
  width: 100%;
  padding: 24px;
  margin: 0 auto;
  @media (max-width: 576px) {
    padding: 0px;
  }
`;

export const CustomRow = styled(Row)`
  @media (max-width: 576px) {
    flex-direction: column !important;
  }
`;

export const CustomColumn = styled(Column)`
  flex-direction: row;
  align-items: flex-end;
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
  }
`;


export const OnlineStatus = styled.div`
  width: 8px;
  height: 8px;
  background: #28f461;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-flex;
`;