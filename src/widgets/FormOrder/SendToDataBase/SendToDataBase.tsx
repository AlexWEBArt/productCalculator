import { Button } from "antd"
import { sendRequst } from "../../../redux/slices/selectedSlice"
import React, { useEffect, useState } from "react"
import formattingRequest from "../../../utils/formattingRequest"
import { Purchase } from "../FormOrder"
import { useAppDispatch } from "../../../hooks/hooks"

const SendToDataBase: React.FC<{purchases: Purchase[]}> = ({purchases}) => {
    const dispatch = useAppDispatch()
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        if (purchases.length === 0) {
            return setDisabled(true)
        }
        setDisabled(false)
    }, [purchases])

    if (!purchases) return null

    const handleOnClickConvert = () => {
        const request = formattingRequest(purchases)
        dispatch(sendRequst(request))
    }

    return (
        <div className="button-wrapper">
            <Button type="primary" disabled={disabled} onClick={handleOnClickConvert}>Отправить в БД</Button>
        </div>
    )
}

export default SendToDataBase