import { Select } from "./styled.components";
import { ReactComponent as CaretDown } from "assets/svg/arrow_down.svg";

const { Option } = Select;

interface SelectInputProps {
  handleChange: any;
  placeholder: string;
  width?: string;
  style?: any;
  topBorder?: boolean;
  options?: { value: string; label: string }[];
  allowClear?: boolean;
}

const SelectCustom = (props: SelectInputProps) => {
  const {
    handleChange,
    placeholder,
    width,
    topBorder,
    options = [{ label: "Option 1", value: "option 1" }],
    ...rest
  } = props;
  return (
    <Select
      onChange={handleChange}
      suffixIcon={<CaretDown />}
      placeholder={placeholder}
      width={width}
      topborder={topBorder}
      getPopupContainer={(trigger) => trigger.parentNode}
      {...rest}
    >
      {(options ?? []).map(({ label, value }) => {
        return <Option value={value}>{label}</Option>;
      })}
    </Select>
  );
};

export default SelectCustom;
export { SelectInput } from "./styled.components";
