import React, { useState } from 'react';
import { DatePicker  } from '@mui/x-date-pickers/DatePicker'
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker'
import {DateRangePicker} from "@mui/x-date-pickers-pro/"
import { SingleInputTimeRangeField } from '@mui/x-date-pickers-pro/';
import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro/';
import "react-datepicker/dist/react-datepicker.css";
import { Stack } from '@mui/system';
function MuiDatePicker() {
    const [datevalue,setDatevalue]=useState(null)
    const [Timevalue,setTimevalue]=useState(null)
    const [dateRange,setdateRange]=useState([null, null]);
    const [value, setValue] = useState([null,null]);
     const [value1, setValue1] = useState([null,null]);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const handleDateChange = (dateRange)=>{
    setdateRange(dateRange)
}
  const handleChange1 = (newValue) => {
    setValue1(newValue);
  };

  return (
    <Stack p={3} m={3}>
        <DatePicker
        label="Date"
        value={datevalue}
        onChange={(changedvalue)=>{setDatevalue(changedvalue)
        console.log(changedvalue)}}
        />
        <StaticTimePicker 
        value={Timevalue}
        onChange={(changedvalue)=>setTimevalue(changedvalue)} 
        />
        <DateRangePicker 
        startText="Start"
        endText="End"
        value={dateRange}
        onChange={handleDateChange}
        />
    <SingleInputTimeRangeField
     label="Select time range"
      value={value}
      onChange={handleChange}
     />
      <MultiInputTimeRangeField
      label="Time Range"
      value={value1}
      onChange={handleChange1}
    />
    </Stack>
  );
}

export default MuiDatePicker;

// Helpful GitHub
//https://github.com/mui/mui-x/issues/5107