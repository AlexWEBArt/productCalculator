import React from "react";
import InfoRow from "./InfoRow/InfoRow";
import { Purchase } from "../FormOrder";

const ConfigurInfo: React.FC<{ purchases: Purchase[] | undefined }> = ({ purchases }) => {
    if (!purchases) return null

    const handleClickColapse = (e: React.MouseEvent<HTMLElement>) => {
        const closestWidget = (e.target as HTMLElement).closest('.widget__form-order');
        if (closestWidget) {
            closestWidget.classList.toggle('collapsed');
        }
    }

    return (
        <div className="widget__form-order__price-prewiew" onClick={handleClickColapse}>
            <h3 className="sub-title">Конфигурация КП</h3>
            {
                purchases.map(purchase => <InfoRow key={purchase.id} purchase={purchase} />)
            }
        </div>
    )
}

export default ConfigurInfo