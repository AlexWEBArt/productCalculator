import { Tooltip } from "antd"

export default function InfoRow({ purchase }) {

    return (
        <div className="price-prewiew__text-container">
            <span className="text-container__quantity">
                {purchase.quantity} {purchase.unit}
            </span>
            <span className="text-container__name">
                {purchase.title}
            </span>
            <span className="text-container__price">
                {
                    purchase.discount ?
                        <Tooltip title={'Применена скидка ' + purchase.discount + '%.'}>
                            <span style={{color: '#A30000'}}>
                                {purchase.price} &#8381;
                            </span>
                        </Tooltip>
                        :
                        <>
                            {purchase.price} &#8381;
                        </>
                }

            </span>
        </div>
    )
}