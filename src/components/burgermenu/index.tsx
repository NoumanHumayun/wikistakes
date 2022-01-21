import { useCallback, useContext } from "react";
import styled, { css, ThemeContext } from "styled-components";

import { CONTEXT } from "helpers/constants";
import { GlobalContext } from "context/GlobalContext";

import { ReactComponent as Burger } from "assets/svg/burger.svg";

export const Menu = styled(Burger)`
  margin-right: 18px;
  cursor: pointer;
  ${({ theme: { isDesktop } }) =>
    !isDesktop
      ? ``
      : css`
          display: none;
        `}
`;

export const BurgerMenu = () => {
  const { dispatch } = useContext(GlobalContext);
  const { isDesktop } = useContext(ThemeContext);

  const onSideBar = useCallback(
    () =>
      dispatch({
        type: CONTEXT.SET_SIDEBAR_OPEN,
        data: true,
      }),
    [dispatch]
  );

  return isDesktop ? <></> : <Menu onClick={onSideBar} />;
};
