import React from 'react';
import { PDFViewer, Page, View, Document } from '@react-pdf/renderer';
import Intro from './DynamicComponent/Intro.jsx';
import About from './StaticComponent/About';
import Portfolio from './StaticComponent/Portfolio';
import Cost from './DynamicComponent/Cost';
import styles from './Styles.js';

export default function GeneratePDF({ finalPrice, tax, purchases, dataCO }) {
    return (
        <PDFViewer width="800" height="600" >
            <Document style={styles.document}>
                <Page size={[1400]} wrap={false}>
                    <View style={styles.space}>
                        <Intro companyName={dataCO.InputCompanyName}/>
                        <About />
                        <Portfolio />
                        <Cost finalPrice={finalPrice} tax={tax} purchases={purchases} dataCO={dataCO}/>
                    </View>
                </Page>
            </Document>
        </PDFViewer >
    )
}