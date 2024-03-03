import React, { useState } from 'react';
import { Switch, Select, Col, InputNumber, Row, Slider } from 'antd';

export default function TypeSelect({ type, disabled }) {

    const { defaultValue, variants } = type


    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <Select
            disabled={disabled}
            defaultValue={defaultValue}
            style={{
                width: 90,
                margin: '5px 16px',
            }}
            onChange={handleChange}
            options={variants.map(variant => ({ value: variant, label: variant }))}
        />
    )
}