import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const SSDropdown = ({
  options,
  id,
  label,
  name,
  formik,
  helperText,
  variant = "standard",
}) => {
  const error = formik?.touched?.[name] && formik?.errors?.[name];

  return (
    <FormControl variant={variant} fullWidth>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={name}
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        label={label}
      >
        {options?.length > 0 &&
          options.map((option) => (
            <MenuItem value={option.value} key={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </Select>
      <FormHelperText error={Boolean(error)}>
        {helperText || error}
      </FormHelperText>
    </FormControl>
  );
};

SSDropdown.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  variant: PropTypes.string,
  options: PropTypes.array,
  formik: PropTypes.object,
};

SSDropdown.defaultProps = {
  name: "",
  id: "",
  label: "",
  helperText: "",
  variant: "standard",
  options: [],
  formik: {},
};

export default SSDropdown;
