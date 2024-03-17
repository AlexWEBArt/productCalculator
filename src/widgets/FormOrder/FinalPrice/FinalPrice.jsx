import CountUp from "react-countup";

export default function FinalPrice({ finalPrice, tax }) {
    return (
        <>
            <div className="widget__form-order__final-price">
                <span>
                    Итого
                </span>
                <span>
                    {<CountUp duration={0.4} start={0} end={finalPrice || 0} suffix=" &#8381;" decimals={2}>
                        {({ countUpRef, start }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>}
                </span>
            </div>
            <div className="widget__form-order__final-price">
                <span>
                    НДС
                </span>
                <span>
                    {<CountUp duration={0.5} start={0} end={tax || 0} suffix=" &#8381;" decimals={2}>
                        {({ countUpRef, start }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>}
                </span>
            </div>
            <div className="widget__form-order__final-price">
                <span>
                    Итого с НДС
                </span>
                <span>
                    <b>
                        {<CountUp duration={0.3} start={0} end={(finalPrice + tax) || 0} suffix=" &#8381;" decimals={2}>
                            {({ countUpRef, start }) => (
                                <div>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>}
                    </b>
                </span>
            </div>
        </>
    )
}