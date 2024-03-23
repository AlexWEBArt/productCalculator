import { Tooltip } from "antd"
import React, { useRef } from "react";
import { Transition } from "react-transition-group"
import { Purchase } from "../../FormOrder";

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
    unmounted: { opacity: 0 },
};

const InfoRow: React.FC<{purchase: Purchase}> = ({ purchase }) => {
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
                                        {purchase.calculatedPrice} &#8381;
                                    </span>
                                </Tooltip>
                                :
                                <>
                                    {purchase.calculatedPrice} &#8381;
                                </>
                        }

                    </span>
                </div>
            )}
        </Transition>
    )
}

export default InfoRow