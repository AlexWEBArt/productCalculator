export default function calculatingFinalPrice(purchases) {
    if (!purchases) return null
    return purchases.reduce((finalPrice, purchase) => {
        return finalPrice + purchase.price
    }, 0)
}