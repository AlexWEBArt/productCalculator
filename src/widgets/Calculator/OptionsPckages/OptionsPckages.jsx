import React from 'react';
import Option from './Option/Option';

export default function OptionsPckages({ options }) {

  return (
    <div className='widget__calculator__group-wrapper'>
      {options.map(option => <Option key={option.id} option={option}/>)}
    </div>
  )

}