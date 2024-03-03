import React, { useEffect, useState } from 'react';
import { Col, InputNumber, Row, Slider } from 'antd';
import TypeSelect from '../TypeSelect/TypeSelect';
import { useDispatch, useSelector } from 'react-redux';
import { addValue } from '../../../../../../redux/slices/selectedSlice';

export default function TypeSlider({ children, option, type }) {
    const {max, min, step} = type.limits
    const dispatch = useDispatch()
    const { options } = useSelector(store => store.selected)
    const [disabled, setDisabled] = useState(true)
    const [inputValue, setInputValue] = useState(Number(min));

    useEffect(() => {
        if (options.find(item => item.id === option.id)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [options])

    useEffect(() => {
        if (!disabled) {
            dispatch(addValue({id: option.id, quantity: inputValue}))
        }
    }, [inputValue, disabled])

    const onChangeOptionValue = (newValue) => {

        setInputValue(newValue);
    };

    return (
        <Row>
            <Col span={16}>
                <Slider
                    disabled={disabled}
                    min={Number(min)}
                    max={Number(max)}
                    onChange={onChangeOptionValue}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                    step={Number(step)}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    disabled={disabled}
                    min={Number(min)}
                    max={Number(max)}
                    style={{ margin: '0 16px' }}
                    step={Number(step)}
                    value={inputValue}
                    onChange={onChangeOptionValue}
                />
                {children &&
                    <TypeSelect
                        disabled={disabled}
                        type={children}
                    />
                }
            </Col>
        </Row>
    )
}