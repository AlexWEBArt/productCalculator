import InfoRow from "./InfoRow/InfoRow";


export default function ConfigurInfo({ purchases }) {
    // if (Boolean(purchases.lenght)) return null
    return (
        <div className="widget__form-order__price-prewiew">
            <h3 className="sub-title">Конфигурация КП</h3>
            {
                purchases.map(purchase => <InfoRow key={purchase.id} purchase={purchase} />)
            }
        </div>
    )
}