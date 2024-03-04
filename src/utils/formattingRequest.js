export default function formattingRequest(purchases) {
    return purchases.map(purchase => ({
        id: purchase.id, 
        quantity: purchase.quantity, 
        title: purchase.title,
        discount: purchase.discount,
        price: purchase.price
    }))
}