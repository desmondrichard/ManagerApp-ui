import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function ExploreOptions() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <FormControl variant="filled" sx={{ minWidth: '21ch'}}>
                <InputLabel id="demo-simple-select-filled-label">Download</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Download Excel</MenuItem>
                    <MenuItem value={20}>Download PDF</MenuItem>        
                </Select>
            </FormControl>
        </div>
    )
}

export default ExploreOptions