const calculatingPriceOption = (quantity: number, price: number, discount: number) => {
    return Math.round(quantity * (price - (price / 100 * (discount || 0))) * 100) / 100
}

export default calculatingPriceOption