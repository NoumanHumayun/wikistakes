import {Alert} from "./styled.components";

interface SnackbarProps {
  message: string;
  description: string;
  type: "success" | "info" | "warning" | "error" | undefined;
  showIcon?: boolean;
  show: boolean;
  onClose: any;
}

const Snackbar = (props: SnackbarProps) => {
  const { message, description, type, show, ...rest } = props;
  return (
    <>
      {show && (
        <Alert
          message={message}
          description={description}
          type={type}
          closable
          {...rest}
        />
      )}
    </>
  );
};

export default Snackbar;
