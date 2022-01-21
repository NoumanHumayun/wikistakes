import { NavbarContainer } from "./styled.components";

interface LandingNavbarProps {
  children: any;
  dontShow?: boolean;
  transparent?: boolean;
  mode?: string;
}

const LandingNavbar = (props: LandingNavbarProps) => {
  const { children, dontShow, transparent, mode } = props;
  return (
    <NavbarContainer dontShow={dontShow} transparent={transparent} mode={mode}>
      {children}
    </NavbarContainer>
  );
};

export default LandingNavbar;
