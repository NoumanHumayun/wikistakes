import styled from "styled-components";
import AntAutoComplete from "antd/lib/auto-complete";
import { Modal } from "components/structural";
import Button from "components/button/primary";
import { ReactComponent as Search } from "assets/svg/search.svg";

export const InviteCandidateModal = styled(Modal)`
  @media (max-width: 576px) {
    width: 100% !important;
    max-width: 100% !important;
    margin: 10px 0 0 !important;
    .ant-modal-content {
      padding: 64px 48px 28px;
      /* border-radius: 0px; */
    }

    @media (max-width: 576px) {
      .ant-modal-content {
        padding: 48px 24px;
        margin: 0px 10px;
      }
    }
  }
`;


export const CompanyHeading = styled.p`
  margin-bottom: 2px;
  font-weight: 500;
  font-size: 12px;
  color: rgba(1, 1, 2, 0.96);
`;

export const Location = styled.p`
  margin-bottom: 0px;
  font-size: 10px;
  font-weight: 400;
  color: rgba(10, 5, 41, 0.32);
`;

export const AutoComplete = styled(AntAutoComplete)<{ loading: boolean }>`
  width: 100%;
  height: 48px;
  position: relative;

  background: #fff;

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
    height: 48px !important;
  }
  .ant-select-selection-search-input {
    height: 47px !important;
    margin-left: 32px !important;
  }
  .ant-select-selection-placeholder {
    color: rgba(1, 1, 2, 0.96);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0.01em;

    display: flex;
    align-items: center;
    margin-left: 32px !important;
    height: 47px;
  }
  .ant-select-selection-item {
    background: #fff !important;
  }
  .ant-select-clear {
    background: transparent;
  }
`;

export const InviteButton = styled(Button)<{loading?: boolean; disabled?: boolean;}>`
  border: 1px solid rgba(1, 1, 2, 0.96);
  background: #0a0529;
  color: #fff;
  padding: 20px 16px;
  width: 100%;
  margin-bottom: 8px;
`;

export const CancelButton = styled(Button)`
  border: 0px;
  background: #fff;
  color: #010102;
  padding: 20px 16px;
  width: 100%;
  &:hover {
    background: #0a0529;
    color: #fff;
  }
`;

export const SearchIcon = styled(Search)`
  width: 20px !important;
  height: 20px !important;
  margin-left: 15px;
  position: absolute;
  top: 15px;
  left: 5px;
`;

export const CandidateHeading = styled.p`
  font-size: 14px;
  color: #777778;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin: 24px 0px 0px;
`;

export const CandidatesContainer = styled.div`
  width: 100%;
  background: #f1f0f7;
  border: 0.5px solid rgba(10, 5, 41, 0.32);
  box-sizing: border-box;
  border-radius: 8px;
  min-height: 240px;
  max-height: 240px;
  overflow: hidden;
  overflow-y: scroll;
  padding-bottom: 10px;
`;
