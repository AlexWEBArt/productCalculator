import InfoRow from "./InfoRow/InfoRow";

export default function ConfigurInfo({ purchases, finalPrice }) {
    return (
        <div className="widget__form-order__price-prewiew">
            <h3 className="sub-title">Конфигурация КП</h3>
            {
                purchases.map(purchase => <InfoRow key={purchase.id} purchase={purchase} finalPrice={finalPrice} />)
            }
        </div>
    )
}