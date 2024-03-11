import React from 'react';
import font from '../../../../assets/fonts/Roboto-Regular.ttf'
import { PDFViewer, Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
    family: "Roboto",
    format: "truetype",
    src: font
});

// Create styles
const styles = StyleSheet.create({
    document: {
        fontFamily: 'Roboto',
        fontSize: 8,
        padding: 10,
    },
    table: {
        padding: 8,
    },
    colorRow: {
        backgroundColor: '#e4f0f5',
        fontWeight: 'bold',
        alignItems: 'center'
    },
    cell: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        border: '1 solid #a0a0a0',
        borderTop: 'none'
    },
    center: {
        textAlign: 'center'
    },
    colspan1: {
        flex: 1,
    },
    colspan2: {
        flex: 2,
    },
    colspan6: {
        flex: 6,
    },
    left: {
        textAlign: 'left',
    },
    totalRow: {
        backgroundColor: '#e4f0f5',
        textAlign: 'left',
    },
    footerRow: {
        textAlign: 'left',
    },
});

export default function GeneratePDF({ allOptions }) {
    let finalPrice = 0
    let tax = 0

    return (
        <PDFViewer width="800" height="600" >
            <Document style={styles.document}>
                <Page size="A4">
                    <View style={styles.table}>
                        <View style={[styles.cell, styles.colorRow, { borderTop: '1 solid #a0a0a0' }]}>
                            <Text style={styles.colspan1}>Единовременные платежи</Text>
                        </View>
                        <View style={[styles.cell, styles.colorRow]}>
                            <Text style={[styles.colspan1, styles.left]}>Элемент услуги</Text>
                            <Text style={[styles.colspan2, styles.center]}>Тариф</Text>
                            <Text style={[styles.colspan1, styles.center]}>Единица тарификации</Text>
                            <Text style={[styles.colspan1, styles.center]}>Количество</Text>
                            <Text style={[styles.colspan1, styles.center]}>Цена за единицу</Text>
                            <Text style={[styles.colspan1, styles.center]}>Стоимость, всего в руб. без учета НДС*</Text>
                        </View>
                        {
                            allOptions.map(option => {
                                const priceWithDiscount = option.price - (option.price / 100 * option.discount)
                                const priceAll = priceWithDiscount ? Math.round(priceWithDiscount * option.quantity) : option.price * option.quantity
                                finalPrice += priceAll
                                tax = finalPrice/100 * 20
                                return (
                                    <View key={option.id} style={[styles.cell]}>
                                        <Text style={styles.colspan1}>{option.service_element}</Text>
                                        <Text style={styles.colspan2}>{option.title}</Text>
                                        <Text style={[styles.colspan1, styles.center]}>1 {option.unit}</Text>
                                        <Text style={[styles.colspan1, styles.center]}>{option.quantity}</Text>
                                        <Text style={[styles.colspan1, styles.center]}>{priceWithDiscount ? priceWithDiscount.toFixed(2) : option.price}</Text>
                                        <Text style={[styles.colspan1, styles.center]}>{priceAll}</Text>
                                    </View>
                                )
                            })
                        }
                        <View style={[styles.cell, styles.totalRow]}>
                            <Text style={styles.colspan6}>
                                Всего без НДС
                            </Text>
                            <Text style={[styles.colspan1, styles.center]}>{finalPrice.toFixed(2)}</Text>
                        </View>
                        <View style={[styles.cell, styles.totalRow]}>
                            <Text style={styles.colspan6}>
                                НДС 20%
                            </Text>
                            <Text style={[styles.colspan1, styles.center]}>{tax.toFixed(2)}</Text>
                        </View>
                        <View style={[styles.cell, styles.totalRow]}>
                            <Text style={styles.colspan6}>
                                ИТОГО, с учетом НДС
                            </Text>
                            <Text style={[styles.colspan1, styles.center]}>{(finalPrice + tax).toFixed(2)}</Text>
                        </View>
                        <View style={[styles.cell, styles.footerRow]}>
                            <Text style={styles.colspan1}>
                                * При изменении ставки НДС стоимость меняется соответствующим образом.
                            </Text>
                        </View>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}