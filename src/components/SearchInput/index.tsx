import { Input } from "./styled.components";
import { ReactComponent as SearchIcon } from "assets/svg/search.svg";

interface SearchInputProps {
  ref?: any;
  forwardRef?: any;
  onChange?: any;
  value?: string;
  name?: string;
  background?: string;
  noBorder?: boolean;
  placeholder?: string;
}

const SearchInput = (props: any) => {
  return (
    <Input
      {...props}
      size="large"
      placeholder={props?.placeholder || "Search"}
      prefix={<SearchIcon />}
    />
  );
};

export default SearchInput;
