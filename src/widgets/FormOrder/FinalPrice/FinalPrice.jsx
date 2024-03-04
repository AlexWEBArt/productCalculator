import calculatingTax from "../../../utils/calculatingTax";

export default function FinalPrice({ finalPrice }) {
    const tax = calculatingTax(finalPrice)

    return (
        <>
            <div className="widget__form-order__final-price">
                <span>
                    {tax || 0} &#8381; (НДС)
                </span>
                +
                <span>
                    {finalPrice || 0} &#8381;
                </span>
            </div>
            <div className="widget__form-order__final-price">
                <span>
                    Итого с НДС
                </span>
                <span>
                    <b>
                    {finalPrice + tax || 0} &#8381;
                    </b>
                </span>
            </div>
        </>
    )
}