import { Text, View } from '@react-pdf/renderer';
import styles from '../Styles.js';

export default function Intro() {
    return (
        <View style={styles.intro}>
            <Text style={styles.h1}>Комерческое предложение</Text>
            <Text style={styles.h5}>Ромашке</Text>
            <Text style={styles.text}>на предоставление облачных услуг Cloud</Text>
        </View>
    )
}