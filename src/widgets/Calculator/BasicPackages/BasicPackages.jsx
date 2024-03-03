import React, { useState } from 'react';
import { Radio } from 'antd';
import { useDispatch } from 'react-redux';
import { selectBaseLine } from '../../../redux/slices/selectedSlice';

export default function BasicPackages({baseline}) {
    const dispatch = useDispatch()
    const [value3, setValue3] = useState('');

    const onChange3 = ({ target: { value } }) => {
        console.log('radio1-2 checked', value);
        // console.log(baseline.find(pack => pack.title === value))
        dispatch(selectBaseLine({...baseline.find(pack => pack.title === value), quantity: 1}))
        setValue3(value);
      };
      
    const optionsRadios = baseline.map(pack => ({label: pack.title, value: pack.title}));
    return (
        <div className='widget__calculator__basicPackages'>
            <Radio.Group options={optionsRadios} onChange={onChange3} value={value3} optionType="button" />
        </div>
    )
}