import { Text, View } from '@react-pdf/renderer';
import styles from '../Styles.js';

export default function Intro({companyName}) {
    return (
        <View style={styles.intro}>
            <Text style={styles.h1}>Коммерческое предложение</Text>
            <Text style={styles.h5}>{companyName}</Text>
            <Text style={styles.text}>на предоставление облачных услуг Cloud</Text>
        </View>
    )
}