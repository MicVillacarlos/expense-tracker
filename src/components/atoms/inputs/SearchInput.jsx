/* eslint-disable react/prop-types */
import { Input } from "@chakra-ui/react";
import { InputGroup } from "@/components/chakra/input-group";
import { SearchIcon } from "../icons/SearchIcon";

const SearchInput = ({ placeHolder, onChange }) => {
  return (
    <InputGroup startElement={<SearchIcon width={"20px"} height={"20px"}/>}>
      <Input placeholder={placeHolder} onChange={onChange} />
    </InputGroup>
  );
};

export default SearchInput;
