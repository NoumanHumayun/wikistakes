import { FC } from "react";
import Spin from "antd/lib/spin";
import { Button, Link as SecondaryLink} from "./secondary.styled";

interface Props {
  children: any;
  width?: string;
  style?: any;
  onClick?: any;
  loading?: boolean;
  padding?: string;
  disabled?: boolean;
  background?: string;
}

const ButtonComponent: FC<Props> = ({ children, loading, ...props }) => {
  return (
    <Button {...props}>
      {loading && <Spin size="small" style={{ marginRight: "5px" }} />}
      {children}
    </Button>
  );
};


export {SecondaryLink};
export default ButtonComponent;

