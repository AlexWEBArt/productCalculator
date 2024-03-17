import InfoRow from "./InfoRow/InfoRow";

export default function ConfigurInfo({ purchases, finalPrice }) {
    const handleClickColapse = (e) => {
        e.target.closest('.widget__form-order').classList.toggle('collapsed')
    }

    return (
        <div className="widget__form-order__price-prewiew" onClick={(e) => handleClickColapse(e)}>
            <h3 className="sub-title">Конфигурация КП</h3>
            {
                purchases.map(purchase => <InfoRow key={purchase.id} purchase={purchase} finalPrice={finalPrice} />)
            }
        </div>
    )
}