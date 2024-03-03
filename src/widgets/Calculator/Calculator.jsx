import * as products from '../../data/mockUpBackend.json'
import Service from "./Service/Service"

export default function Calculator() {
    const { services } = products.default[0]

    return (
        <section className="widget">
            <div className="widget__calculator">
                {services.map((service, index) => <Service key={index} service={service} />)}
            </div>
        </section>
    )
}