import React from 'react';
import TypeSlider from './TypeSlider/TypeSlider';

export default function SpecialType({ option, types, disabled }) {
    return (
        <TypeSlider option={option} type={types[0]} disabled={disabled} />
    )
}