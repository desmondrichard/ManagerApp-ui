import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './Phone.css';
function Phone({isClear}) {
    const [value, setValue] = useState();
    console.log(isClear);
    return (
        <div style={{}}>
            <PhoneInput
                placeholder="Enter phone number"
                value={isClear?"":value} //True-empty false-value
                onChange={setValue} />
        </div>
    )
}

export default Phone