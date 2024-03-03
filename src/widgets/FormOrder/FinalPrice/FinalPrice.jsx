export default function FinalPrice({finalPrice}) {

    return (
        <div className="widget__form-order__final-price">
            <span>
                Итого
            </span>
            <span>
                {finalPrice || 0} &#8381;
            </span>
        </div>
    )
}