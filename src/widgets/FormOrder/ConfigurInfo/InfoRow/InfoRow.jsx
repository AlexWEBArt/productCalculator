import { Tooltip } from "antd"
import { useRef } from "react";
import CountUp from "react-countup";
import { Transition } from "react-transition-group"

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

export default function InfoRow({ purchase }) {
    const nodeRef = useRef(null);
    return (
        <Transition
            nodeRef={nodeRef}
            in={true}
            mountOnEnter
            appear
            timeout={1000}
        >
            {(state) => (
                <div
                    className="price-prewiew__text-container"
                    ref={nodeRef}
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                    }}
                >
                    <span className="text-container__quantity">
                        {purchase.quantity} {purchase.unit}
                    </span>
                    <span className="text-container__name">
                        {purchase.title}
                    </span>
                    <span className="text-container__price">
                        {
                            purchase.discount ?
                                <Tooltip title={'Применена скидка ' + purchase.discount + '%.'}>
                                    <span style={{ color: '#A30000' }}>
                                        {<CountUp duration={0.3} start={0} end={purchase.calculatedPrice} suffix=" &#8381;" decimals={2}>
                                        {({ countUpRef, start }) => (
                                            <div>
                                                <span ref={countUpRef} />
                                            </div>
                                        )}
                                    </CountUp>}
                                    </span>
                                </Tooltip>
                                :
                                <>
                                    {<CountUp duration={0.3} start={0} end={purchase.calculatedPrice} suffix=" &#8381;" decimals={2} >
                                        {({ countUpRef, start }) => (
                                            <div>
                                                <span ref={countUpRef} />
                                            </div>
                                        )}
                                    </CountUp>} 
                                </>
                        }

                    </span>
                </div>
            )}
        </Transition>
    )
}