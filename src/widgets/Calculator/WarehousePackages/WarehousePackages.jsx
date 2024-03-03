import React, { useState } from 'react';
import { Select, Col, InputNumber, Row, Slider } from 'antd';

export default function WarehousePackages({ service }) {
    const [inputValue, setInputValue] = useState(100);

    const onChange2 = (newValue) => {
        // console.log(newValue % 100)

        setInputValue(newValue);
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <div className='widget__calculator__group'>
            <span>{service[0].title}</span>
            <div>
                <Row>
                    <Col span={16}>
                        <Slider
                            min={100}
                            max={30000}
                            onChange={onChange2}
                            value={typeof inputValue === 'number' ? inputValue : 0}
                            step={100}
                        />
                    </Col>
                    <Col span={4}>
                        <InputNumber
                            min={100}
                            max={30000}
                            style={{ margin: '0 16px' }}
                            step={100}
                            value={inputValue}
                            onChange={onChange2}
                        />
                        <Select
                            defaultValue='ГБ'
                            style={{
                                width: 90,
                                margin: '5px 16px',
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'ГБ',
                                    label: 'ГБ',
                                },
                                {
                                    value: 'ТБ',
                                    label: 'ТБ',
                                },
                            ]}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}