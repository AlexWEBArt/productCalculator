export default function calculatingTax(finalPrice) {
    return Math.round((finalPrice / 100 * 20))
}