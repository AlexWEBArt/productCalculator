import React from 'react';
import OptionFn from './Option/OptionFn';
import { Option } from '../../../redux/slices/selectedSlice';

const OptionsPckages: React.FC<{ options: Option[] }> = ({ options }) => {

  return (
    <div className='widget__calculator__group-wrapper'>
      {options.map(option => <OptionFn key={option.id} option={option}/>)}
    </div>
  )
}

export default OptionsPckages