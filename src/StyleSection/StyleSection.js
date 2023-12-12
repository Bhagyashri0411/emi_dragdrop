import React from 'react';

export const BorderSection = ({ borderValues }) => {

    return {
        borderTop: `${borderValues[0]}px ${borderValues[4]} ${borderValues[5]}`,
        borderLeft: `${borderValues[1]}px ${borderValues[4]} ${borderValues[5]}`,
        borderRight: `${borderValues[2]}px ${borderValues[4]} ${borderValues[5]}`,
        borderBottom: `${borderValues[3]}px ${borderValues[4]} ${borderValues[5]}`,
    };
};

export const BackgroundSection = ({ value }) => {
    return {
        background: `linear-gradient(${value[0]}deg, ${value[1]}, ${value[2]})`,
    };

};

export const MarginSection = ({ marginValues }) => {
    return {
        marginTop: `${marginValues[0]}px`,
        marginLeft: `${marginValues[1]}px`,
        marginRight: `${marginValues[2]}px`,
        marginBottom: `${marginValues[3]}px`,
    };

};