import FinalPrice from "./FinalPrice/FinalPrice";
import ConfigurInfo from "./ConfigurInfo/ConfigurInfo";
import SendToDataBase from "./SendToDataBase/SendToDataBase";
import ConvertPDF from "./ConvertPDF/ConvertPDF";
import { useSelector } from "react-redux";
import formattingOrder from "../../utils/formattingOrder";
import calculatingFinalPrice from "../../utils/calculatingFinalPrice";

export default function FormOrder() {
    const { baseLine, options } = useSelector(store => store.selected)
    const purchases = formattingOrder([{ ...baseLine }, ...options])
    const finalPrice = calculatingFinalPrice(purchases)

    return (
        <section className="widget">
            <div className="widget__form-order">
                {baseLine && <ConfigurInfo purchases={purchases} finalPrice={finalPrice}/>}
                <FinalPrice finalPrice={finalPrice}/>
                <div className="button-container">
                    <SendToDataBase purchases={purchases}/>
                    <ConvertPDF purchases={purchases}/>
                </div>
            </div>
        </section>
    )
}