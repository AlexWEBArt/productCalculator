import React, { useEffect, useState } from 'react';
import { Switch, Tooltip, InputNumber, Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addValue, selectOption, unSelectOption } from '../../../../redux/slices/selectedSlice';
import OptionSlider from './OptionSlider/OptionSlider';
import { VerticalAlignTopOutlined } from '@ant-design/icons'


export default function Option({ option }) {
    const { baseOption } = useSelector(store => store.selected)

    const [disabled, setDisabled] = useState(false)
    const [switchOff, setSwitchOff] = useState(true)
    const [discountValue, setDiscountValue] = useState(0);
    const dispatch = useDispatch()

    useEffect(() => {
        if (baseOption) {
            const exception = option.disabledForBaseLine.find(exeption => exeption.id === baseOption.id)
            if (exception) {
                dispatch(unSelectOption(option))
                return setDisabled(true)
            }
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [baseOption])

    useEffect(() => {
        if (discountValue >= 0) {
            dispatch(addValue({ id: option.id, discount: discountValue }))
        }
    }, [discountValue])

    const onChangeOptionSwitcher = (e) => {
        if (e) {
            setSwitchOff(false)
            dispatch(selectOption({ ...option, quantity: 1 }))
        } else {
            setDiscountValue(0)
            setSwitchOff(true)
            dispatch(unSelectOption(option))
        }
    };

    const handleOnClickMaxDiscount = () => {
        if (switchOff) return
        setDiscountValue(option.max_discount)
    }

    const onChangeOptionDiscount = (e) => {
        setDiscountValue(e)
    }

    return (
        <div className='widget__calculator__group-item'>
            <p><b>{option.service_element}</b></p>
            <div className='group-item__controls-wrapper'>
                <div className='group-item__controls'>
                    {
                        disabled ?
                            <Tooltip title={'Опция не доступна для этого пакета'}>
                                <Switch disabled={disabled} onChange={onChangeOptionSwitcher} />
                            </Tooltip>
                            :
                            <Switch disabled={disabled} onChange={onChangeOptionSwitcher} />
                    }
                    <span>{option.title}</span>
                </div>
            </div>
            {
                option.limits && <OptionSlider option={option} limits={option.limits} />
            }
            <Divider />
            <div className='group-item__price'>
                <div className='price__base-price'>
                    <span className='group-item__price__text'>Базовая стоимость за 1{option.unit}</span>
                    <span className='group-item__price__text'>{option.price + ' '}&#8381;</span>
                </div>
                <div className='price__discount'>
                    <span className='group-item__price__text'>Применить скидку</span>
                    <div className='price__discount__input-wrapper'>
                        {
                            disabled || switchOff ?
                                <Tooltip title={'Максимальная скидка ' + option.max_discount + '%. Нажмите, что бы применить.'}>
                                    <span className='group-item__price__tooltip' style={{backgroundColor: 'rgba(0, 0, 0, 0.25)'}} onClick={handleOnClickMaxDiscount}><VerticalAlignTopOutlined /></span>
                                </Tooltip>
                                :
                                <Tooltip title={'Максимальная скидка ' + option.max_discount + '%. Нажмите, что бы применить.'}>
                                    <span className='group-item__price__tooltip' onClick={handleOnClickMaxDiscount}><VerticalAlignTopOutlined /></span>
                                </Tooltip>
                        }

                        <InputNumber
                            disabled={disabled || switchOff}
                            min={0}
                            max={option.max_discount}
                            defaultValue={0}
                            step={0.1}
                            value={discountValue}
                            onChange={onChangeOptionDiscount}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}