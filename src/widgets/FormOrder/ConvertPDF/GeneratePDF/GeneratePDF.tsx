import React from 'react';
import { PDFViewer, Page, View, Document } from '@react-pdf/renderer';
import Intro from './DynamicComponent/Intro.jsx';
import About from './StaticComponent/About.jsx';
import Portfolio from './StaticComponent/Portfolio.jsx';
import Cost from './DynamicComponent/Cost.tsx';
import styles from './Styles.js';
import { Purchase } from '../../FormOrder.js';
import { DataCO } from '../../../../redux/slices/selectedSlice.js';

const GeneratePDF: React.FC<{ finalPrice: number, tax: number, purchases: Purchase[], dataCO: DataCO }> = ({ finalPrice, tax, purchases, dataCO }) => {
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

export default GeneratePDF