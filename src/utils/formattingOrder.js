export default function formattingOrder(purchases) {
    return purchases.map(purchase => ({
        id: purchase.id, 
        quantity: purchase.quantity, 
        unit: purchase.unit, 
        title: purchase.title,
        discount: purchase.discount,
        price: Math.round(purchase.quantity * (purchase.price - (purchase.price / 100 * (purchase.discount || 0))))
    }))
}