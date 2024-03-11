import { Text, View } from '@react-pdf/renderer';
import styles from '../Styles.js';

export default function Cost({ allOptions }) {
    let finalPrice = 0
    let tax = 0

    return (
        <View style={styles.cost}>
            <Text style={styles.h1}>Расчет стоимости</Text>
            <View style={styles.costTable}>
                <View style={styles.row}>
                    <View style={[styles.costCell, { borderTopLeftRadius: 25 }]}>
                        <Text style={styles.costCellText}>
                            Элемент услуги
                        </Text>
                    </View>
                    <View style={styles.costCell}>
                        <Text style={styles.costCellText}>
                            Тариф
                        </Text>
                    </View>
                    <View style={styles.costCell}>
                        <Text style={styles.costCellText}>
                            Единица тарификации
                        </Text>
                    </View>
                    <View style={styles.costCell}>
                        <Text style={styles.costCellText}>
                            Количество
                        </Text>
                    </View>
                    <View style={styles.costCell}>
                        <Text style={styles.costCellText}>
                            Цена за единицу
                        </Text>
                    </View>
                    <View style={[styles.costCell, { borderTopRightRadius: 25 }]}>
                        <Text style={styles.costCellText}>
                            Стоимость, всего в руб. без учета НДС
                        </Text>
                    </View>
                </View>
                {
                    allOptions.map(option => {
                        const priceWithDiscount = option.price - (option.price / 100 * option.discount)
                        const priceAll = priceWithDiscount ? Math.round(priceWithDiscount * option.quantity) : option.price * option.quantity
                        finalPrice += priceAll
                        tax = finalPrice / 100 * 20
                        return (
                            <View key={option.id} style={styles.row}>
                                <View key={option.id} style={styles.costCell}>
                                    <Text style={styles.costCellText}>
                                        {option.service_element}
                                    </Text>
                                </View>
                                <View key={option.id} style={styles.costCell}>
                                    <Text style={styles.costCellText}>
                                        {option.title}
                                    </Text>
                                </View>
                                <View key={option.id} style={styles.costCell}>
                                    <Text style={styles.costCellText}>
                                        1 {option.unit}
                                    </Text>
                                </View>
                                <View key={option.id} style={styles.costCell}>
                                    <Text style={styles.costCellText}>
                                        {option.quantity}
                                    </Text>
                                </View>
                                <View key={option.id} style={styles.costCell}>
                                    <Text style={styles.costCellText}>
                                        {priceWithDiscount ? priceWithDiscount.toFixed(2) : option.price}
                                    </Text>
                                </View>
                                <View key={option.id} style={styles.costCell}>
                                    <Text style={styles.costCellText}>
                                        {priceAll.toFixed(2)}
                                    </Text>
                                </View>
                            </View>
                        )
                    })
                }

                <View style={styles.row}>
                    <View style={[styles.costCell, styles.costColspan5]}>
                        <Text style={styles.costCellText}>
                            Всего без НДС
                        </Text>
                    </View>
                    <View style={styles.costCell}>
                        <Text style={styles.costCellText}>
                            {finalPrice.toFixed(2)}
                        </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={[styles.costCell, styles.costColspan5]}>
                        <Text style={styles.costCellText}>
                            НДС 20%
                        </Text>
                    </View>
                    <View style={styles.costCell}>
                        <Text style={styles.costCellText}>
                            {tax.toFixed(2)}
                        </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={[styles.costCell, styles.costColspan5, { borderBottomLeftRadius: 25 }]}>
                        <Text style={styles.costCellText}>
                            Итого, с учетом НДС
                        </Text>
                    </View>
                    <View style={[styles.costCell, { borderBottomRightRadius: 25 }]}>
                        <Text style={styles.costCellText}>
                            {(finalPrice + tax).toFixed(2)}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Актуально на: 2023-06-01
                </Text>
                <Text style={styles.footerText}>
                    Менеджер: Иванов Иван Иванович
                </Text>
            </View>
        </View>
    )
}