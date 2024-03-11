import React, { useState } from 'react';
import { Divider } from 'antd';
import BasicOption from '../BasicOption/BasicOption';
import OptionsPckages from '../OptionsPckages/OptionsPckages';

export default function Service({service}) {
    const { serviceName, baseOptions, options } = service
    const [hasBaseOption] = useState(baseOptions ? true : false) 

    return (
        <div className='widget__calculator__group'>
            {
                hasBaseOption && (
                    <>
                        <h3 className='sub-title'>Базовый пакет</h3>
                        <h4 className='sub-title' style={{textAlign: 'center'}}>{serviceName}</h4>
                        <BasicOption options={baseOptions}/>
                        <Divider/>
                    </>
                )
            }
            {
                
            }
            <h4 className='sub-title'>
                {hasBaseOption ? 'Дополнительные опции' : 'Cервис'}
            </h4>
            <OptionsPckages options={options} />
        </div>
    )
}