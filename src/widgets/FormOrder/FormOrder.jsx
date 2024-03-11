import FinalPrice from "./FinalPrice/FinalPrice";
import ConfigurInfo from "./ConfigurInfo/ConfigurInfo";
import SendToDataBase from "./SendToDataBase/SendToDataBase";
import ConvertPDF from "./ConvertPDF/ConvertPDF";
import { useSelector } from "react-redux";
import formattingOrder from "../../utils/formattingOrder";
import calculatingFinalPrice from "../../utils/calculatingFinalPrice";

export default function FormOrder() {
    const { baseOption, options } = useSelector(store => store.selected)
    const allOptions = [{ ...baseOption }, ...options]
    const purchases = formattingOrder(allOptions)
    const finalPrice = calculatingFinalPrice(purchases)

    return (
        <section className="widget">
            <div className="widget__form-order">
                {baseOption && <ConfigurInfo purchases={purchases} finalPrice={finalPrice}/>}
                <FinalPrice finalPrice={finalPrice}/>
                <div className="button-container">
                    <SendToDataBase purchases={purchases}/>
                    <ConvertPDF allOptions={allOptions}/>
                </div>
            </div>
        </section>
    )
}