/* eslint-disable react/prop-types */
import { Input } from "@chakra-ui/react";
import { InputGroup } from "@/components/chakra/input-group";
import { SearchIcon } from "../icons/SearchIcon";
import { darkTheme } from "@/theme/theme";

const SearchInput = ({ placeHolder, onChange }) => {
  return (
    <InputGroup width={"100%"} startElement={<SearchIcon width={"100%"} height={"20px"}/>}>
      <Input placeholder={placeHolder} onChange={onChange}       background={darkTheme.transparent}/>
    </InputGroup>
  );
};

export default SearchInput;
