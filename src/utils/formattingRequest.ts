import { Purchase } from "../widgets/FormOrder/FormOrder"
import { Request } from "../redux/slices/selectedSlice"

const formattingRequest = (purchases: Purchase[]): Request[] => {
    return purchases.map(purchase => ({
        id: purchase.id, 
        quantity: purchase.quantity.toString(), 
        title: purchase.title,
        discount: purchase.discount.toString(),
        price: purchase.price.toString()
    }))
}

export default formattingRequest