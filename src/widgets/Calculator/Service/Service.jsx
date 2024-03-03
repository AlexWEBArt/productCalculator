import React from 'react';
import { Divider } from 'antd';
import BasicPackages from '../BasicPackages/BasicPackages';
import OptionsPckages from '../OptionsPckages/OptionsPckages';

export default function Service({service}) {
    const { serviceName, baseLine, options } = service

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