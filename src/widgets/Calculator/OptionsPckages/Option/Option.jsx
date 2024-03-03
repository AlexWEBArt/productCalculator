import React, { useEffect, useState } from 'react';
import { Switch, Tooltip, InputNumber } from 'antd';
import SpecialType from './SpecialType/SpecialType'
import { useDispatch, useSelector } from 'react-redux';
import { addValue, selectOption, unSelectOption } from '../../../../redux/slices/selectedSlice';


export default function Option({ option }) {
    const { baseLine } = useSelector(store => store.selected)

    const [disabled, setDisabled] = useState(false)
    const [switchOff, setSwitchOff] = useState(true)
    const [discountValue, setDiscountValue] = useState(0);
    const dispatch = useDispatch()

    useEffect(() => {
        if (baseLine) {
            const exception = option.disabledForBaseLine.find(exeption => exeption.includes(baseLine.title))
            if (exception) {
                dispatch(unSelectOption(option))
                return setDisabled(true)
            }
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [baseLine])

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

            {
                Boolean(option.specialTypes.length) && <SpecialType disabled={disabled} option={option} types={option.specialTypes} />
            }
            <div className='group-item__price'>
                <div className='price__base-price'>
                    <span className='group-item__price__text'>Базовая стоимость за 1{option.unit}</span>
                    <span className='group-item__price__text'>{option.price + ' '}&#8381;</span>
                </div>
                <div className='price__discount'>
                    <span className='group-item__price__text'>Применить скидку</span>
                    <div>
                        <Tooltip title={'Максимальная скидка ' + option.max_discount + '%. Нажмите, что бы применить.'}>
                            <span className='group-item__price__tooltip' onClick={handleOnClickMaxDiscount}>%</span>
                        </Tooltip>
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