import font from '../../../../assets/fonts/CraftworkGrotesk-Regular.ttf';
import { StyleSheet, Font } from '@react-pdf/renderer';

// const font: any = require('../../../../assets/fonts/CraftworkGrotesk-Regular.ttf');

Font.register({
    family: "CraftworkGrotesk",
    format: "truetype",
    src: font
});

// Create styles
const styles = StyleSheet.create({
    document: {
        fontFamily: 'CraftworkGrotesk',
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
        backgroundColor: '#1677ff',
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
        overflow: 'hidden',
        borderLeft: '1px solid #151515',
        borderTop: '1px solid #151515',
    },
    costCellRight: {
        borderRight: '1px solid #151515',
    },
    costCellBottom: {
        borderBottom: '1px solid #151515',
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

export default styles