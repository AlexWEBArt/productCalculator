import React, { useState } from 'react';
import { Row, Col, InputNumber } from 'antd';

export default function ManagedCloudBackUp({ service }) {
    // const plainOptions = [services[2].title, services[3].title, services[4].title];

    const [inputValue, setIinputValue] = useState(false);

    const onChange = (e) => {
        console.log('radio7 checked', e);

        // toggle(value)

        setIinputValue(e);
    };

    return (
        <div className='widget__calculator__group'>
            <div className='widget__calculator__group-item'>
            <span>{service[0].title}</span>
            {/* <Row>
            <Col span={4}> */}
            <div>
            <InputNumber
                    min={1}
                    max={5}
                    // style={{ margin: '0 16px' }}
                    step={1}
                    value={inputValue}
                    onChange={onChange}
                />
            </div>

            {/* </Col>
            </Row> */}
                
            </div>
        </div>

    )
}