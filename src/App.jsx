import React from 'react';
import Calculator from './widgets/Calculator/Calculator';
import FormOrder from './widgets/FormOrder/FormOrder';


const App = () => {
    console.log('render')
    return (
        <div className="app">
            <header className='header'>
                <div className='header__content'>
                    Header
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
export default App;