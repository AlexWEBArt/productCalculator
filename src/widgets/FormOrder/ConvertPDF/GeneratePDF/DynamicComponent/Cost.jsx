import { Text, View } from '@react-pdf/renderer';
import styles from '../Styles.js';
import calculatingPriceOption from '../../../../../utils/calculatingPriceOption.js';

export default function Cost({ finalPrice, tax, purchases }) {
    if (!finalPrice) return null
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
                    <View style={[styles.costCell, styles.costCellRight, { borderTopRightRadius: 25 }]}>
                        <Text style={styles.costCellText}>
                            Стоимость, всего в руб. без учета НДС
                        </Text>
                    </View>
                </View>
                {
                    purchases.map(option => {
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
                                        {option.price}
                                    </Text>
                                </View>
                                <View key={option.id} style={[styles.costCell, styles.costCellRight]}>
                                    <Text style={styles.costCellText}>
                                        {option.calculatedPrice}
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
                    <View style={[styles.costCell, styles.costCellRight]}>
                        <Text style={styles.costCellText}>
                            {finalPrice}
                        </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={[styles.costCell, styles.costColspan5]}>
                        <Text style={styles.costCellText}>
                            НДС 20%
                        </Text>
                    </View>
                    <View style={[styles.costCell, styles.costCellRight]}>
                        <Text style={styles.costCellText}>
                            {tax}
                        </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={[styles.costCell, styles.costColspan5, styles.costCellBottom, { borderBottomLeftRadius: 25 }]}>
                        <Text style={styles.costCellText}>
                            Итого, с учетом НДС
                        </Text>
                    </View>
                    <View style={[styles.costCell, styles.costCellBottom, styles.costCellRight, { borderBottomRightRadius: 25 }]}>
                        <Text style={styles.costCellText}>
                            {finalPrice + tax}
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