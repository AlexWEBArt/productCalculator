import React, { useEffect, useState } from 'react';
import { InputNumber, Row, Slider } from 'antd';
import { Limits, Option, addQuantity } from '../../../../../redux/slices/selectedSlice';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';

const OptionSlider: React.FC<{ option: Option, limits: Limits}> = ({ option, limits }) => {
    const { max, min, step } = limits
    const dispatch = useAppDispatch()
    const { options } = useAppSelector(store => store.selected)
    const [disabled, setDisabled] = useState(true)
    const [inputValue, setInputValue] = useState(Number(min));

    useEffect(() => {
        if (options.find(item => item.id === option.id)) {
            setDisabled(false)
        } else {
            setDisabled(true)
            setInputValue(Number(min))
        }
    }, [options])

    useEffect(() => {
        if (!disabled) {
            dispatch(addQuantity({ id: option.id, quantity: inputValue }))
        }
    }, [inputValue, disabled])

    const onChangeOptionValue = (newValue: number | null) => {
        if(newValue) setInputValue(newValue);
    };

    return (
        <Row justify={'space-between'}>
            <div style={{ flex: 10 }}>
                <Slider
                    disabled={disabled}
                    min={Number(min)}
                    max={Number(max)}
                    onChange={onChangeOptionValue}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                    step={Number(step)}
                />
            </div>
            <InputNumber
                disabled={disabled}
                min={Number(min)}
                max={Number(max)}
                style={{ margin: '0 0 0 16px' }}
                step={Number(step)}
                value={inputValue}
                onChange={onChangeOptionValue}
            />
        </Row>
    )
}

export default OptionSlider