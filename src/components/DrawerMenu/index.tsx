import {
  SidebarContainer,
  Sidebar,
  TitleContainer,
  CloseIcon,
  Tabs,
} from "./components/styled.components";

const { TabPane } = Tabs;

interface DrawerMenuProps {
  isOpen: boolean;
  handleCloseMenu: any;
  changePage: any;
  defaultActive: string;
}

const DrawerMenu = (props: DrawerMenuProps) => {
  const { isOpen, handleCloseMenu, changePage, defaultActive } = props;

  return (
    <SidebarContainer open={isOpen}>
      <Sidebar>
        <TitleContainer>
          <CloseIcon onClick={handleCloseMenu} />
        </TitleContainer>
        <Tabs defaultActiveKey={defaultActive} onChange={changePage}>
          <TabPane tab="HOME" key="/" />
          <TabPane tab="JOBS" key="/jobs" />
          <TabPane tab="CONTACT" key="/contact" />
          <TabPane tab="ABOUT" key="/about" />
        </Tabs>
      </Sidebar>
    </SidebarContainer>
  );
};

export default DrawerMenu;
