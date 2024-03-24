import FinalPrice from "./FinalPrice/FinalPrice";
import ConfigurInfo from "./ConfigurInfo/ConfigurInfo";
import SendToDataBase from "./SendToDataBase/SendToDataBase.tsx";
import ConvertPDF from "./ConvertPDF/ConvertPDF.jsx";
import formattingOrder from "../../utils/formattingOrder";
import calculatingFinalPrice from "../../utils/calculatingFinalPrice.ts";
import calculatingTax from "../../utils/calculatingTax.ts";
import { useAppSelector } from "../../hooks/hooks";
import { Option } from "../../redux/slices/selectedSlice.ts";

export type Purchase = {
    id: string;
    service_element: string;
    quantity: number;
    unit: string;
    title: string;
    discount: number;
    price: number;
    calculatedPrice: number;
}

export default function FormOrder() {
    const { baseOption, options } = useAppSelector(store => store.selected)
    const allOptions: Option[] | null = baseOption ? [{ ...baseOption }, ...options] : null
    const purchases: Purchase[] | null = formattingOrder(allOptions || null)
    const finalPrice: number = calculatingFinalPrice(purchases || [])
    const tax: number = calculatingTax(finalPrice)

    return (
        <section className="widget">
            <div className="widget__form-order">
                {baseOption && <ConfigurInfo purchases={purchases || []}/>}
                <FinalPrice finalPrice={finalPrice} tax={tax}/>
                <div className="button-container">
                    <SendToDataBase purchases={purchases || []}/>
                    <ConvertPDF finalPrice={finalPrice} tax={tax} purchases={purchases || []}/>
                </div>
            </div>
        </section>
    )
}