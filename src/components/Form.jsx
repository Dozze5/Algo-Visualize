import React from 'react';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';

// Create a styled radio component with a custom color
const StyledRadio = styled(Radio)(({ theme }) => ({
  color: theme.palette.secondary.main,
  '&.Mui-checked': {
    color: theme.palette.secondary.main,
  },
}));

export default function Form({
  formLabel,
  values,
  labels,
  currentValue,
  onChange,
}) {
  return (
    <div className='card container-small'>
      <FormControl component='fieldset'>
        <FormLabel>{formLabel}</FormLabel>
        <RadioGroup value={currentValue} onChange={onChange}>
          {values.map((value, index) => {
            return (
              <FormControlLabel
                key={`${value}_${index}`}
                value={value}
                control={<StyledRadio />}
                label={labels[index]}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
