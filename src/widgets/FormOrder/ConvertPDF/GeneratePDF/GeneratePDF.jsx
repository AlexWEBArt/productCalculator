import React from 'react';
import { PDFViewer, Page, View, Document } from '@react-pdf/renderer';
import Intro from './StaticComponent/Intro';
import About from './StaticComponent/About';
import Portfolio from './StaticComponent/Portfolio';
import Cost from './DynamicComponent/Cost';
import styles from './Styles.js';

export default function GeneratePDF({ finalPrice, tax, purchases }) {
    return (
        <PDFViewer width="800" height="600" >
            <Document style={styles.document}>
                <Page size={[1400, 'auto']}>
                    <View style={styles.space}>
                        <Intro />
                        <About />
                        <Portfolio />
                        <Cost finalPrice={finalPrice} tax={tax} purchases={purchases} />
                    </View>
                </Page>
            </Document>
        </PDFViewer >
    )
}