import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './SearchButton.css';

function SearchButton() {
    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {width: '26ch'},
                }}
                noValidate
                autoComplete="off"
            ></Box>
            <div>
                <TextField
                    id="filled-multiline-flexible"
                    label="Search"
                    multiline
                    maxRows={4}
                    variant="filled"
                    placeholder='Ex:Admin'
                    
                />
            </div>
        </div>
    )
}

export default SearchButton