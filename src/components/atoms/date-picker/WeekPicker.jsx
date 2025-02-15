/* eslint-disable react/prop-types */
import { darkTheme } from "@/theme/theme";
import { Input } from "@chakra-ui/react";
import moment from "moment-timezone";

const WeekPicker = ({ onChange }) => {
  const today = moment().tz("Asia/Manila");
  const week = today.format("YYYY-[W]WW"); // Correct week format

  return (
    <Input
      name="week"
      type="week"
      placeholder="Select Week"
      variant="subtle"
      max={week}
      onChange={onChange}
      background={darkTheme.transparent}
    />
  );
};

export default WeekPicker;
