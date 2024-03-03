import React, { useState } from 'react';
import { Divider, Radio } from 'antd';
import BasicPackages from '../BasicPackages/BasicPackages';
import OptionsPckages from '../OptionsPckages/OptionsPckages';

export default function Service({service}) {
    const { serviceName, baseLine, options } = service
    // console.log(serviceName)
    // console.log(baseline)
    // console.log(options)

    // if (baseline) {

    // }
    // console.log(service["DF Workspace Premium"])
    const [value3, setValue3] = useState('');

    const onChange3 = ({ target: { value } }) => {
        console.log('radio1-2 checked', value);
    
        setValue3(value);
      };
    //   console.log(baseLine)
    // const optionsRadios = [
    //     {
    //       label: service["DF Workspace Premium"][0].title,
    //       value: service["DF Workspace Premium"][0].title,
    //     },
    //     {
    //       label: service["DF Workspace Premium"][1].title,
    //       value: service["DF Workspace Premium"][1].title,
    //     }
    //   ];
    return (
        <div className='widget__calculator__group'>
            {
                baseLine && (
                    <>
                        <h3 className='sub-title'>Базовый пакет</h3>
                        <h4 className='sub-title' style={{textAlign: 'center'}}>{serviceName}</h4>
                        <BasicPackages baseline={baseLine}/>
                        <Divider/>
                    </>
                )
            }
            <h4 className='sub-title'>Дополнительные опции</h4>
            <OptionsPckages options={options} />
        </div>
    )
}