import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { EditorTheme, Keyboard, EditorModes } from "../Constant";
import { useState } from "react";

// Type definition for the select component.
export type selectType = EditorModes | EditorTheme | Keyboard | string;

/**
 * Props definition for the select component.
 */
export interface ISelectComponentProps {
  label: string;
  optionArray: Array<selectType>;
  handleChange: (e: any) => void;
}

/**
 * Function component definition for the Select component.
 *
 * @param props Properties of the SelectComponent.
 * @returns UI component for the SelectComponent.
 */
export default function SelectComponent(props: ISelectComponentProps) {
  const [value, setValue] = useState<string>("");

  const handleChangeLocally = (e: any) => {
    props.handleChange(e.target.value);
    setValue(e.target.value as string);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={props.label}
        onChange={handleChangeLocally}
      >
        {props.optionArray.map((value, index) => {
          return (
            <MenuItem value={value} key={index}>
              {value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
