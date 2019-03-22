import React from 'react';
import Brightness5 from '@material-ui/icons/Brightness5';

const iconStyle = {
    fontSize:'30px',
    verticalAlign:'top'
}

export default () => {
    return (
        <div className="title">
            <span className="">WO API TESTER </span>
            <Brightness5 style={iconStyle} />
        </div>
    )
}