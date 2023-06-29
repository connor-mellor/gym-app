import { MenuItem, TextField } from "@mui/material";

export function Select({ variant, val }: any) {
  const weights: any = [
    {
      value: 1,
      label: "1kg",
    },
    {
      value: 2,
      label: "2kg",
    },
    {
      value: 3,
      label: "3kg",
    },
    {
      value: 4,
      label: "4kg",
    },
  ];

  const quantity: any = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
  ];

  return variant === "weight" ? (
    <TextField
      id="standard-select-weight"
      select
      label="Select"
      defaultValue={val}
      helperText="Select a weight"
      variant="standard"
    >
      {weights.map((option: any) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  ) : (
    <TextField
      id="standard-select-quantity"
      select
      label="Select"
      defaultValue={val}
      helperText="Select a quantity"
      variant="standard"
    >
      {quantity.map((option: any) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
