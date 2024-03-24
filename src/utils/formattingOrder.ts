import { Option } from "../redux/slices/selectedSlice";
import { Purchase } from "../widgets/FormOrder/FormOrder";
import calculatingPriceOption from "./calculatingPriceOption";

const formattingOrder = (purchases: Option[] | null): Purchase[] | null => {
    if (!purchases) return null

    return purchases.map(purchase => {
        const purchaseQuantity = purchase.quantity || 1
        const purchaseDiscount = purchase.discount || 0
        const purchasePrice = Number(purchase.price)

        return {
            id: purchase.id,
            service_element: purchase.service_element,
            quantity: purchaseQuantity,
            unit: purchase.unit,
            title: purchase.title,
            discount: purchaseDiscount,
            price: purchasePrice,
            calculatedPrice: calculatingPriceOption(purchaseQuantity, purchasePrice, purchaseDiscount)
        };
    });
}

export default formattingOrder