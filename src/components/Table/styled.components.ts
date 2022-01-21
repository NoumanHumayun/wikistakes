import styled from "styled-components";
import AntTable from "antd/lib/table";
import { ReactComponent as ArrowIcon } from "assets/svg/arrow_down.svg";

export const Table = styled(AntTable)`
  .ant-table-content {
    border: 0.5px solid rgba(10, 5, 41, 0.32);
    border-bottom: 0px;
  }
  .ant-table-cell {
    border-color: rgba(10, 5, 41, 0.32) !important;
  }
  th {
    background: #fff !important;
    text-transform: uppercase;
    font-size: 12px !important;
    font-weight: 400 !important;
    color: #777778 !important;
  }
  .ant-table-thead > tr > th {
    padding: 4px 16px !important;
    height: 40px;
  }
  .ant-checkbox-inner {
    border-color: rgba(10, 5, 41, 0.32);
    border-width: 2px;
    width: 18px;
    height: 18px;
  }
  .ant-pagination-simple-pager {
    margin-top: -1px;
  }
  .ant-pagination-simple-pager input {
    border: 0px;
    background: transparent;
    margin: 0px;
    padding-right: 0px;
    width: 22px;
  }
  .ant-pagination-slash {
    visibility: hidden;
    margin: 0px 5px;
  }
  .ant-pagination-slash:before {
    visibility: visible;
    content: "out of";
  }
`;

export const ArrowLeft = styled(ArrowIcon)`
  transform: rotate(90deg);
`;

export const ArrowRight = styled(ArrowIcon)`
  transform: rotate(270deg);
`;

export const PagesOutOf = styled.p`
  margin: 0px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(1, 1, 2, 0.96);
`;

export const TableFooter = styled.div`
  position: relative;
  bottom: 38px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  width: fit-content;
`;
