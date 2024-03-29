import Service from "./Service/Service"
import { Empty } from 'antd'
import { RightCircleFilled, LeftCircleFilled } from '@ant-design/icons'
import React from "react"
import { Products } from "../../redux/thunks/productsListThunk"

const Calculator: React.FC<{products: Products[], error: string}> = ({ products, error }) => {

    if (error) {
        return (
            <section className="widget">
                <div className="error__container">
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    <div style={{ textAlign: 'center', color: '#A30000' }}>{error}</div>
                </div>
            </section>
        )
    }

    if (products.length === 0) return null

    const { services, product } = products[0]

    return (
        <section className="widget">
            <div className="widget__calculator">
                <div className='widget__calculator__products'>
                    <div className="products__button">
                        {/* @ts-ignore: Unreachable code error */}
                        <LeftCircleFilled style={{ color: "rgba(0, 0, 0, 0.40)", fontSize: 30 }} />
                    </div>
                    <h1 className='sub-title'>{product}</h1>
                    <div className="products__button">
                        {/* @ts-ignore: Unreachable code error */}
                        <RightCircleFilled style={{ color: "rgba(0, 0, 0, 0.40)", fontSize: 30 }} />
                    </div>
                </div>
                {
                    services.map((service, index) => <Service key={index} service={service} />)
                }
            </div>
        </section>
    )
}

export default Calculator