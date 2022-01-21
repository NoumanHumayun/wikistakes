import { TabContainer, Image, BadgeText, BadgePara } from "./styled.components";

interface TabBadgeProps {
  width?: string;
  height?: string;
  background: string;
  onChange?: any;
  value?: string;
  noBorder?: boolean;
  placeholder: string;
}

const TabBadge = (props: TabBadgeProps) => {
  const { background, width, height, placeholder } = props;
  return (
    <TabContainer>
      <Image src={background} />
      <BadgeText>{placeholder}</BadgeText>
      <BadgePara>{placeholder}</BadgePara>
    </TabContainer>
  );
};

export default TabBadge;
