import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBarWithLabel() {
    const now = 40;
    return <ProgressBar striped variant="success" now={now} label={`${now}% Done`} style={{backgroundColor:'#343A40',width:'20rem'}}/>;
}

export default ProgressBarWithLabel
