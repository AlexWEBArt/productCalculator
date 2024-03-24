import React, { useRef, useState } from 'react';
import { Radio, Tooltip, InputNumber } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { useDispatch } from 'react-redux';
import { Option, addDiscountBaseOption, selectBaseOption } from '../../../redux/slices/selectedSlice';
import { VerticalAlignTopOutlined } from '@ant-design/icons'
import { CSSTransition } from 'react-transition-group';

const BasicOption: React.FC<{ options: Option[] }> = ({ options }) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<Option>({    
        id: '',
        service_element: '',
        title: '',
        unit: '',
        charge_type: '',
        price: '',
        min_price: '',
        currency: '',
        max_discount: '',
    });
    const [discountValue, setDiscountValue] = useState(0);
    const nodeRef = useRef(null);

    const onChangeBaseOption = ({ target: { value } }: RadioChangeEvent) => {
        const active = options.find(pack => pack.title === value)
        if (active) {
            dispatch(selectBaseOption({ ...active, quantity: 1 }))
            setDiscountValue(0)
            setValue(active);
        }
    };

    const handleOnClickMaxDiscount = () => {
        const maxDiscount = Number(value.max_discount)
        
        dispatch(addDiscountBaseOption(maxDiscount))
        setDiscountValue(maxDiscount)
    }

    const onChangeOptionDiscount = (discount: number | null) => {
        if (discount) {
            dispatch(addDiscountBaseOption(discount))
            setDiscountValue(discount)
        }
    }
    const optionsRadios = options.map(pack => ({ label: pack.title, value: pack.title }));

    return (
        <div className='widget__calculator__basicPackages'>
            <div className='basicPackages__group-wrapper'>
                <Radio.Group options={optionsRadios} onChange={onChangeBaseOption} value={value.title} optionType="button" />
            </div>
            <CSSTransition
                nodeRef={nodeRef}
                in={Boolean(value.id)}
                mountOnEnter
                timeout={5000}
                classNames="animation-node"
            >
                    <div className='group-item__price' ref={nodeRef}>
                        <div className='price__base-price'>
                            <span className='group-item__price__text'>Базовая стоимость за 1{value.unit}</span>
                            <span className='group-item__price__text'>{value.price + ' '}&#8381;</span>
                        </div>
                        <div className='price__discount'>
                            <span className='group-item__price__text'>Применить скидку</span>
                            <div className='price__discount__input-wrapper'>
                                <Tooltip title={'Максимальная скидка ' + value.max_discount + '%. Нажмите, что бы применить.'}>
                                    <span className='group-item__price__tooltip' onClick={handleOnClickMaxDiscount}>
                                        {/* @ts-ignore: Unreachable code error */}
                                        <VerticalAlignTopOutlined />
                                    </span>
                                </Tooltip>
                                <InputNumber
                                    min={0}
                                    max={Number(value.max_discount)}
                                    defaultValue={0}
                                    step={0.1}
                                    value={discountValue}
                                    onChange={onChangeOptionDiscount}
                                />
                            </div>
                        </div>
                    </div>
            </CSSTransition>
        </div>
    )
}

export default BasicOption