import React, { useState } from 'react';
import { Radio } from 'antd';
import { useDispatch } from 'react-redux';
import { selectBaseLine } from '../../../redux/slices/selectedSlice';

export default function BasicPackages({ baseline }) {
    const dispatch = useDispatch()
    const [value3, setValue3] = useState('');

    const onChange3 = ({ target: { value } }) => {
        const active = baseline.find(pack => pack.title === value)
        dispatch(selectBaseLine({ ...active, quantity: 1 }))
        setValue3(value);
    };

    const optionsRadios = baseline.map(pack => ({ label: pack.title + ' ' + pack.price, value: pack.title }));
    return (
        <div className='widget__calculator__basicPackages'>
            <Radio.Group options={optionsRadios} onChange={onChange3} value={value3} optionType="button" />
        </div>
    )
}