import React from 'react';
import Calculator from './widgets/Calculator/Calculator';
import FormOrder from './widgets/FormOrder/FormOrder';
import { useSelector } from 'react-redux';

const Redirect = ({request}) => {
    return (
        <p>
            {JSON.stringify(request)}
        </p>
    )
}

const App = () => {
    return (
        <div className="app">
            <header className='header'>
                <div className='header__content'>
                    PRODUCT CALCULATOR
                </div>
            </header>
            <main className='main'>
                <div className='main__content'>
                    <Calculator />
                    <FormOrder />
                </div>
            </main>
            <footer className='footer'>
                <div className='footer__content'>
                    Footer
                </div>
            </footer>
        </div>
    )
};

const Controller = () => {
    const { request } = useSelector(store => store.selected)
    return (
        <>
            {
                request ?
                    <Redirect request={request} />
                    :
                    <App />
            }
        </>
    )
}
export default Controller;