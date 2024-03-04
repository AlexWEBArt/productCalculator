import { Button } from "antd"
import { useDispatch } from "react-redux"
import { sendRequst } from "../../../redux/slices/selectedSlice"
import { useEffect, useState } from "react"
import formattingRequest from "../../../utils/formattingRequest"

export default function SendToDataBase({purchases}) {
    const dispatch = useDispatch()
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        if (!purchases) {
            return setDisabled(true)
        }
        setDisabled(false)
    }, [purchases])

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