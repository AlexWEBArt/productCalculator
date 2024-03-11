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
    },
    space: {
        padding: '0 15px 0'
    },
    intro: {
        paddingTop: '101px',
    },
    h1: {
        color: '#30343c',
        fontSize: 100,
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '110%',
        letterSpacing: '-1px',
        textTransform: 'uppercase',
        marginBottom: '40px',
    },
    h5: {
        color: '#151515',
        fontSize: '50px',
        marginBottom: '15px',
        fontWeight: 400,
    },
    text: {
        color: '#151515',
        fontSize: '30px',
        maxWidth: '1075px',
    },
    about: {
        paddingTop: '211px',
    },
    aboutWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '1365px',
        margin: '0 auto',
        marginTop: '161px',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    cell: {
        justifyContent: 'space-between',
        alignItems: 'stretch',
        borderRadius: '25px',
        border: '1px solid #151515',
        padding: '25px',
        paddingRight: '24px',
    },
    colspan1: {
        width: '20%',
    },
    colspan2: {
        width: '40%',
    },
    colspan5: {
        width: '100%',
    },
    cellTitle: {
        fontSize: 33,
        lineHeight: '110%',
        alignItems: 'center',
    },
    cellText: {
        fontSize: 18,
        lineHeight: '130%',
        marginTop: '15px',
    },
    portfolio: {
        paddingTop: '159px',
    },
    portfolioWrapper: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '70px',
    },
    portfolioBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 45px',
        height: '127px',
        borderRadius: '25px',
        border: '1px solid #151515',
    },
    portfolioBlockText: {
        fontSize: 30,
        lineHeight: '130%',
        paddingRight: '40px',
    },
    portfolioBlockAfterEl: {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: '#e8b703',
    },
    cost: {
        paddingTop: '176px',
        paddingBorder: '98px',
    },
    costTable: {
        marginTop: '70px',
        marginBottom: '65px',
    },
    costCell: {
        justifyContent: 'center',
        width: '16.66%',
        border: '1px solid #151515',
    },
    costCellText: {
        color: '#151515',
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '130%',
        padding: '25px',
        paddingRight: '24px',
    },
    costColspan5: {
        width: '83.3%',
    },
    footerText: {
        fontSize: '30px',
        lineHeight: '130%',
    }
});

export default function GeneratePDF({ allOptions }) {
    let finalPrice = 0
    let tax = 0

    return (
        <PDFViewer width="800" height="600" >
            <Document style={styles.document}>
                <Page size={[1400, 'auto']}>
                    <View style={styles.space}>
                        <View style={styles.intro}>
                            <Text style={styles.h1}>Комерческое предложение</Text>
                            <Text style={styles.h5}>Ромашке</Text>
                            <Text style={styles.text}>на предоставление облачных услуг beeline cloud</Text>
                        </View>
                        <View style={styles.about}>
                            <Text style={[styles.h1, { width: 800 }]}>
                                О компании
                                beeline cloud
                            </Text>
                            <Text style={styles.text}>
                                Российский облачный провайдер с надежными дата-центрами уровня Tier III и выделенными каналами связи.
                                Специализируемся на комплексном решении задач клиентов, связанных с облачной ИТ-инфраструктурой,
                                ИТ-аутсорсингом, кибербезопасностью и сервисами по модели MSP (Managed Service Provider).
                            </Text>
                            <View style={styles.aboutWrapper}>
                                <View style={styles.row}>
                                    <View style={[styles.cell, styles.colspan1]}>
                                        <Text style={styles.cellTitle}>
                                            100+
                                        </Text>
                                        <Text style={styles.cellText}>
                                            Облачных сервисов и решений
                                        </Text>
                                    </View>
                                    <View style={[styles.cell, styles.colspan1]}>
                                        <Text style={styles.cellTitle}>
                                            2000+
                                        </Text>
                                        <Text style={styles.cellText}>
                                            Клиентов из разных отраслей бизнеса
                                        </Text>
                                    </View>
                                    <View style={[styles.cell, styles.colspan1]}>
                                        <Text style={styles.cellTitle}>
                                            99,95%
                                        </Text>
                                        <Text style={styles.cellText}>
                                            Облачный SLA
                                        </Text>
                                    </View>
                                    <View style={[styles.cell, styles.colspan1]}>
                                        <Text style={styles.cellTitle}>
                                            6
                                        </Text>
                                        <Text style={styles.cellText}>
                                            ЦОДов в РФ уровня Tier III
                                        </Text>
                                    </View>
                                    <View style={[styles.cell, styles.colspan1]}>
                                        <Text style={styles.cellTitle}>
                                            5
                                        </Text>
                                        <Text style={styles.cellText}>
                                            Независимых интернет-провайдеров
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View style={[styles.cell, styles.colspan5, { backgroundColor: '#e8b703' }]}>
                                        <Text style={styles.cellTitle}>
                                            Secure by design
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View style={[styles.cell, styles.colspan1]}>
                                        <Text style={styles.cellTitle}>
                                            УЗ-1 152-ФЗ
                                        </Text>
                                        <Text style={styles.cellText}>
                                            Публичное облако
                                        </Text>
                                    </View>
                                    <View style={[styles.cell, styles.colspan1]}>
                                        <Text style={styles.cellTitle}>
                                            ГИС К1, ИСПДн УЗ-1
                                        </Text>
                                        <Text style={styles.cellText}>
                                            Аттестованный сегмент
                                        </Text>
                                    </View>
                                    <View style={[styles.cell, styles.colspan1]}>
                                        <Text style={styles.cellTitle}>
                                            PCI DSS
                                        </Text>
                                        <Text style={styles.cellText}>
                                            Соответствие стандарту
                                        </Text>
                                    </View>
                                    <View style={[styles.cell, styles.colspan2]}>
                                        <Text style={styles.cellTitle}>
                                            ФСБ, ФСТЭК
                                        </Text>
                                        <Text style={styles.cellText}>
                                            Лицензии
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.portfolio}>
                            <Text style={styles.h1}>Продуктовый портфель</Text>
                            <View style={styles.portfolioWrapper}>
                                <View style={styles.portfolioBlock}>
                                    <Text style={styles.portfolioBlockText}>
                                        Инфраструктурные сервисы: IaaS, Private Platform, VDI, DRaaS, BaaS, S3-хранилище, CDN, colocation.
                                    </Text>
                                    <View style={styles.portfolioBlockAfterEl} />
                                </View>
                                <View style={styles.portfolioBlock}>
                                    <Text style={styles.portfolioBlockText}>
                                        Платформенные сервисы: DBaaS, Managed Kubernetes.
                                    </Text>
                                    <View style={styles.portfolioBlockAfterEl} />
                                </View>
                                <View style={styles.portfolioBlock}>
                                    <Text style={styles.portfolioBlockText}>
                                        Управляемые и корпоративные сервисы: корпоративная почта, ВКС, платформа офисного пространства.
                                    </Text>
                                    <View style={styles.portfolioBlockAfterEl} />
                                </View>
                                <View style={styles.portfolioBlock}>
                                    <Text style={styles.portfolioBlockText}>
                                        Сервисы сетевой и информационной безопасности, в том числе Cloud NGFW, SSL VPN, Secure Email Gateway, MFA, WAF, защита от DDoS, Cloud 152 (защита персональных данных).
                                    </Text>
                                    <View style={styles.portfolioBlockAfterEl} />
                                </View>
                            </View>
                        </View>
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
                                            <View style={styles.row}>
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
                    </View>
                </Page>
            </Document>
        </PDFViewer >
    )
}