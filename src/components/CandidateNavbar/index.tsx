import React from "react";
import { useHistory } from 'react-router-dom';
import Menu from "antd/lib/menu";
import {
  NavbarContainer,
  TitleContainer
} from './styled.components';

const Navbar = () => {
  const { push, location } = useHistory();
  const [value, setValue] = React.useState(location.pathname);
  const handleClick = (newValue: any) => {
    setValue(newValue.key);
    push(newValue.key)
  };

  return (
    <NavbarContainer>
      <TitleContainer>
        Resumap
      </TitleContainer>
      <Menu onClick={handleClick} selectedKeys={[value]} mode="horizontal">
        <Menu.Item key="/candidate/">Home</Menu.Item>
        <Menu.Item key="/candidate/job">Jobs</Menu.Item>
        <Menu.Item key="/candidate/contact">Contact</Menu.Item>
        <Menu.Item key="/candidate/about">About</Menu.Item>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
