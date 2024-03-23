import FinalPrice from "./FinalPrice/FinalPrice";
import ConfigurInfo from "./ConfigurInfo/ConfigurInfo";
import SendToDataBase from "./SendToDataBase/SendToDataBase";
import ConvertPDF from "./ConvertPDF/ConvertPDF";
import formattingOrder from "../../utils/formattingOrder";
import calculatingFinalPrice from "../../utils/calculatingFinalPrice";
import calculatingTax from "../../utils/calculatingTax";
import { useAppSelector } from "../../hooks/hooks";

export type Purchase = {
    id: string;
    service_element: string;
    quantity: string;
    unit: string;
    title: string;
    discount: string;
    price: string;
    calculatedPrice: string;
}

export default function FormOrder() {
    const { baseOption, options } = useAppSelector(store => store.selected)
    const allOptions = [{ ...baseOption }, ...options]
    const purchases: Purchase[] = formattingOrder(allOptions)
    const finalPrice: string = calculatingFinalPrice(purchases)
    const tax = calculatingTax(finalPrice)

    return (
        <section className="widget">
            <div className="widget__form-order">
                {baseOption && <ConfigurInfo purchases={purchases} finalPrice={finalPrice}/>}
                <FinalPrice finalPrice={finalPrice} tax={tax}/>
                <div className="button-container">
                    <SendToDataBase purchases={purchases}/>
                    <ConvertPDF finalPrice={finalPrice} tax={tax} purchases={purchases}/>
                </div>
            </div>
        </section>
    )
}