import calculatingPriceOption from "./calculatingPriceOption";

export default function formattingOrder(purchases) {
    if (!purchases[0].id) return
    return purchases.map(purchase => ({
        id: purchase.id,
        service_element: purchase.service_element,
        quantity: purchase.quantity,
        unit: purchase.unit,
        title: purchase.title,
        discount: purchase.discount,
        price: purchase.price,
        calculatedPrice: calculatingPriceOption(purchase.quantity, purchase.price, purchase.discount)
    }))
}