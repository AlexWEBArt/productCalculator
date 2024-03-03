import React from 'react';
import Option from './Option/Option';

export default function OptionsPckages({ options }) {
  return (
    <>
      {options.map(option => <Option key={option.id} option={option}/>)}
    </>
  )

}