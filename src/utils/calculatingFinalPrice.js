export default function calculatingFinalPrice(purchases) {
    if (!purchases) return null
    return Math.round(purchases.reduce((finalPrice, purchase) => {
        return finalPrice + purchase.calculatedPrice
    }, 0) * 100) / 100
}