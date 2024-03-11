import { Text, View } from '@react-pdf/renderer';
import styles from '../Styles.js';

export default function About() {
    return (
        <View style={styles.about}>
            <Text style={[styles.h1, { width: 800 }]}>
                О компании
                Cloud
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
                    <View style={[styles.cell, styles.colspan5, { backgroundColor: '#1677ff' }]}>
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
    )
}