import React from "react";
import Popover from "antd/lib/popover";
import { ListItem, PopoverContainer } from "./styled.components";
import { ReactComponent as DropdownIcon } from "assets/svg/dropdown.svg";

interface ActionHandlerProps {
  options: any[];
  data: any;
}

const ActionHandler = (props: ActionHandlerProps) => {
  const { options, data } = props;

  const [isActionHandlerOpen, setActionHandler] = React.useState(false);

  const content = (options ?? []).map((option: any, index: number) => (
    <ListItem
      key={`action-handler-option-${index}`}
      onClick={() => option.handler(data)}
    >
      {option.title}
    </ListItem>
  ));

  return (
    <Popover
      placement="left"
      // @ts-ignore
      getPopupContainer={(trigger) => trigger.parentNode}
      content={content}
      trigger="click"
      visible={isActionHandlerOpen}
      onVisibleChange={(data) =>  setActionHandler(!!data)}
    >
      <PopoverContainer />
      <DropdownIcon
        onClick={() => setActionHandler(true)}
        style={{ cursor: "pointer" }}
      />
    </Popover>
  );
};

export default ActionHandler;
