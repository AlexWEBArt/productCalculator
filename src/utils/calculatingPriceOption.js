export default function calculatingPriceOption(quantity, price, discount) {
    return Math.round(quantity * (price - (price / 100 * (discount || 0))) * 100) / 100
}