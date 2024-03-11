import { Text, View } from '@react-pdf/renderer';
import styles from '../Styles.js';

export default function Portfolio() {
    return (
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
    )
}