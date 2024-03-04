import calculatingPriceOption from "./calculatingPriceOption";

export default function formattingOrder(purchases) {
    if (!purchases[0].id) return
    return purchases.map(purchase => ({
        id: purchase.id,
        quantity: purchase.quantity,
        unit: purchase.unit,
        title: purchase.title,
        discount: purchase.discount,
        price: calculatingPriceOption(purchase.quantity, purchase.price, purchase.discount)
    }))
}