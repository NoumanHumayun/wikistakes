import styled, { css } from "styled-components";
import { Row, Column } from "components/structural";

export const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
`;

export const TableCardContainer = styled.div`
  padding: 16px 16px 0px 16px;
`;

export const TableCard = styled.div`
  padding: 24px;
  background: #ffffff;
  border: 0.5px solid rgba(10, 5, 41, 0.32);
  box-shadow: 0px 4px 16px rgba(10, 5, 41, 0.05);
  border-radius: 16px;
  @media (min-width: 576px) {
    display: none;
  }
`;

export const TableCardAvatarContainer = styled.div`
  justify-content: space-between;
`;

export const TableCardContent = styled.div<{ flex?: boolean }>`
  margin-top: 16px;
  align-items: center;
  justify-content: space-between;
  ${({ flex }) => flex && `display: flex`}
`;

export const OnlineStatus = styled.div`
  width: 8px;
  height: 8px;
  background: #28f461;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-flex;
`;

export const ClosedStatus = styled.div`
  width: 8px;
  height: 8px;
  background: #ffa51f;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-flex;
`;

export const FilterRow = styled(Row)`
  @media (max-width: 576px) {
    flex-direction: column !important;
  }
`;

export const FilterColumn = styled(Column)`
  flex-direction: row;
  align-items: flex-end;
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const SearchColumn = styled(Column)`
  width: 100%;
  @media (max-width: 576px) {
    padding: 10px 0px;
  }
`;

export const TableHeader = styled.span`
  letter-spacing: 0.08em;
  ${({ theme: { isDesktop } }) => (isDesktop ? "" : css`
    width: 100%;
    padding-left: 11px;
    height: 30px;
  `)}
`;
