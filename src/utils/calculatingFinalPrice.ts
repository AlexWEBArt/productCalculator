import { Purchase } from "../widgets/FormOrder/FormOrder"

const calculatingFinalPrice = (purchases: Purchase[]) => {
    return Math.round(purchases.reduce((finalPrice, purchase) => {
        return finalPrice + purchase.calculatedPrice
    }, 0) * 100) / 100
}

export default calculatingFinalPrice