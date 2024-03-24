const calculatingTax = (finalPrice: number) => {
    return Math.round((finalPrice / 100 * 20))
}

export default calculatingTax