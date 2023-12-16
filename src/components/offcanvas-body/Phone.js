import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './Phone.css';
function Phone() {
    const [value, setValue] = useState()
    return (
        <div style={{}}>
            <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue} />
        </div>
    )
}

export default Phone