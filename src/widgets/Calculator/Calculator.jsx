import BasicPackages from "./BasicPackages/BasicPackages"
import * as products from '../../data/mockUpBackend.json'
import OptionsPckages from "./OptionsPckages/OptionsPckages"
import WarehousePackages from "./WarehousePackages/WarehousePackages"
import ManagedCloudBackUp from "./ManagedCloudBackUp/ManagedCloudBackUp"
import Service from "./Service/Service"

export default function Calculator() {
    // const packets = services.default[0].services[0]["DF Workspace Premium"]
    // const warehouse = services.default[0].services[1]["Хранилище резервных копий"]
    // const managedCB = services.default[0].services[2]["Резервное копирование Veeam"]
    const { services } = products.default[0]
    // const packets = products.default[0].services[0]["DF Workspace Premium"]
    // const { baseline, options } = packets
    // const warehouse = products.default[0].services[1]["Хранилище резервных копий"]
    // const managedCB = products.default[0].services[2]["Резервное копирование Veeam"]
    // console.log(services.forEach(service => <Service service={service} />))
    return (
        <section className="widget">
            <div className="widget__calculator">
                {services.map((service, index) => <Service key={index} service={service} />)}
                {/* <BasicPackages services={packets} />
                <OptionsPckages services={packets} />
                <WarehousePackages service={warehouse} />
                <ManagedCloudBackUp service={managedCB} /> */}
            </div>
        </section>
    )
}