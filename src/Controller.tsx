import React from 'react';
import { useEffect, useState } from 'react';
import Calculator from './widgets/Calculator/Calculator';
import FormOrder from './widgets/FormOrder/FormOrder';
import { productsList } from './redux/thunks/productsListThunk'
import { Skeleton, Spin } from 'antd';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { Request } from './redux/slices/selectedSlice';

/**
 * Компонет вывода прелоудера приложения
 */

const PreloaderApp: React.FC = () => {
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

/**
 * Компонент вывода JSON (иммитация отправки JSON в БД)
 * 
 * @param request объект для сериализации в JSON и отправки в БД
 */

const Redirect: React.FC<{request: Request[]}> = ({request}) => {
    return (
        <p>
            {JSON.stringify(request)}
        </p>
    )
}

/**
 * Главный компонент приложения
 */

const App: React.FC = () => {
    const dispatch = useAppDispatch()
    const { products, loading, error } = useAppSelector(store => store.products)

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

/**
 * Контрольный компонент
 */

const Controller: React.FC = () => {
    const { request } = useAppSelector(store => store.selected)
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