export default function calculatingFinalPrice(purchases) {
    return purchases.reduce((finalPrice, purchase) => {
        return finalPrice + purchase.price
    }, 0)
}