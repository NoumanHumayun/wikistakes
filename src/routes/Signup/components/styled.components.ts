import styled from 'styled-components';
import { Modal } from 'components/structural';

export const ConfirmSignupModal = styled(Modal)`
  max-width: 450px !important;
  top: 30%;
  .ant-modal-body :is(h2, p) {
    text-align: center;
  }
  @media(max-width: 576px) {
    width: 95% !important;
    margin: 0px auto;
  }
`