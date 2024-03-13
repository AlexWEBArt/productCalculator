export default function FinalPrice({ finalPrice, tax }) {
    return (
        <>
            <div className="widget__form-order__final-price">
                <span>
                    Итого
                </span>
                <span>
                    {finalPrice || 0} &#8381;
                </span>
            </div>
            <div className="widget__form-order__final-price">
                <span>
                    НДС
                </span>
                <span>
                    {tax || 0} &#8381;
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