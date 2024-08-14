import {
  MenuItem,
  OutlinedInput,
  Select,
  SxProps,
  FormControl,
  InputLabel,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type Titems = { label: string; value: string };

interface ITextField {
  name: string;
  size?: "small" | "medium";
  placeholder?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
  options: Titems[];
  multiple?: boolean;
}

const PMultipleSelect = ({
  options,
  name,
  label,
  size = "small",
  required,
  fullWidth = true,
  sx,
  multiple = false,
}: ITextField) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
          const value = event.target.value as string[];
          if (multiple && value.length > 3) {
            return;
          }
          field.onChange(event);
        };

        return (
          <FormControl
            fullWidth={fullWidth}
            required={required}
            error={!!error?.message}
            size={size}
            sx={sx}
          >
            {label && <InputLabel>{label}</InputLabel>}
            <Select
              {...field}
              value={multiple ? field.value || [] : field.value}
              label={label}
              multiple={multiple}
              input={<OutlinedInput label={label} />}
              onChange={handleChange as any}
            >
              {options?.map((option: Titems) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      }}
    />
  );
};

export default PMultipleSelect;
