import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact2 = () => {
    return (
        <>
        <section className="funfacts-section-two pt-0">
            <div className="bg bg-pattern-1"></div>
            <div className="auto-container">
            <div className="fact-counter">
                <div className="row"> 
                <div className="counter-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="inner-box">
                    <div className="icon-box"><i className="icon flaticon-order"></i></div>
                    <div className="count-box"><CounterUp count={185} time={3} />+</div>
                    <div className="counter-title">Distribution Center</div>
                    </div>
                </div>
                <div className="counter-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                    <div className="inner-box">
                    <div className="icon-box"><i className="icon flaticon-container"></i></div>
                    <div className="count-box"><CounterUp count={99} time={3} />%</div>
                    <div className="counter-title">On-Time Deliveries</div>
                    </div>
                </div>
                <div className="counter-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                    <div className="inner-box">
                    <div className="icon-box"><i className="icon flaticon-delivery-4"></i></div>
                    <div className="count-box"><CounterUp count={89} time={3} />%</div>
                    <div className="counter-title">Global Network Coverage</div>
                    </div>
                </div>
                <div className="counter-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                    <div className="inner-box">
                    <div className="icon-box"><i className="icon flaticon-delivery-4"></i></div>
                    <div className="count-box"><CounterUp count={85} time={3} />%</div>
                    <div className="counter-title">Cross-Border Efficiency</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
};
export default Funfact2
