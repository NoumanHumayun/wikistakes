import { TabContainer, Image } from "./styled.components";

interface TabProps {
  width?: string;
  height?: string;
  background: string;
  onChange?: any;
  value?: string;
  noBorder?: boolean;
  placeholder: string;
}

const Tab = (props: TabProps) => {
  const { background, width, height, placeholder } = props;
  return (
    <TabContainer>
      <Image src={background} />
      {placeholder}
    </TabContainer>
  );
};

export default Tab;
