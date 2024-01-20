import React  from 'react';
import "./commoncomponent.css";

export default function ColorInput({ bgval, funOnchange }) {

    return (

        <div className="section-wrapper vertical">
            <div className="color-container medium">
                <input type='color' value={bgval} className='colorBox' onChange={funOnchange} />
            </div>
            <div className="input-addon-wrapper">
                <input type="text" value={bgval} />
            </div>
        </div>
    )
}
