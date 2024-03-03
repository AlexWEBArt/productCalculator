export default function FinalPrice({ finalPrice }) {

    return (
        <>
            <div className="widget__form-order__final-price">
                <span>
                </span>
                <span>
                    {finalPrice || 0} &#8381;
                </span>
            </div>
            <div className="widget__form-order__final-price">
                <span>
                    Итого с НДС
                </span>
                <span>
                    {(finalPrice + (finalPrice / 100 * (20))) || 0} &#8381;
                </span>
            </div>
        </>
    )
}