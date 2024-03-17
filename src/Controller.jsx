import React, { useRef, useEffect, useState } from 'react';
import Calculator from './widgets/Calculator/Calculator';
import FormOrder from './widgets/FormOrder/FormOrder';
import { useDispatch, useSelector } from 'react-redux'
import { productsList } from './redux/thunks/productsListThunk'
import { Skeleton, Spin } from 'antd';


const PreloaderApp = () => {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    const isMobile = width <= 1199;
    return (
        <>
            <div>
                <Skeleton.Node
                    style={isMobile ? {
                        width: '90vw',
                        height: '10vh',
                        margin: '10px',
                        marginLeft: '5vw',
                        padding: '10px',
                        borderRadius: 10
                    } : {
                        width: '750px',
                        height: '10vh',
                        margin: '10px',
                        padding: '10px',
                        borderRadius: 10
                    }}>
                    <Spin size='small' />
                </Skeleton.Node>
                <Skeleton.Node
                    style={isMobile ? {
                        width: '90vw',
                        height: '60vh',
                        margin: '10px',
                        marginLeft: '5vw',
                        padding: '10px',
                        borderRadius: 10
                    } : {
                        width: '750px',
                        height: '60vh',
                        margin: '10px',
                        padding: '10px',
                        borderRadius: 10
                    }}>
                    <Spin size='large' />
                </Skeleton.Node>
            </div>
            <Skeleton.Node
                style={isMobile ? {
                    width: '90vw',
                    height: '30vh',
                    margin: '10px',
                    marginLeft: '5vw',
                    padding: '10px',
                    borderRadius: 10
                } : {
                    width: '450px',
                    height: '30vh',
                    margin: '10px',
                    padding: '10px',
                    borderRadius: 10
                }}>
                <Spin />
            </Skeleton.Node>
        </>
    )
}

const Redirect = ({ request }) => {
    return (
        <p>
            {JSON.stringify(request)}
        </p>
    )
}

const App = () => {
    const dispatch = useDispatch()
    const { products, loading, error } = useSelector(store => store.products)

    useEffect(() => {
        if (products.length === 0) {
            dispatch(productsList())
        }
    }, [products])

    return (
        <div className="app">
            <header className='header'>
                <div className='header__content'>
                    PRODUCT CALCULATOR
                </div>
            </header>
            <main className='main'>
                <div className='main__content'>
                    {
                        loading ?
                            <PreloaderApp />
                            :
                            <>
                                <Calculator products={products} error={error} />
                                <FormOrder />
                            </>
                    }
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