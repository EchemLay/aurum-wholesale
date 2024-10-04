import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
  ssr: false,
})
const Funfact3 = () => {
  return (
  <>
  <section className="funfacts-section-three pt-0 pb-0">
    <div className="auto-container">
      <div className="fact-counter">
        <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/15.jpg)' }}></div>
        <div className="row"> 
          {/* Counter block */}
          <div className="counter-block-three col-md-4 col-sm-6 wow fadeInUp">
            <div className="inner-box">
              <div className="icon-box"><i className="icon flaticon-order"></i></div>
              <div className="content-box">
                <div className="count-box"><CounterUp count={541} time={3} />+</div>
                <div className="counter-title">Distribution Center</div>
              </div>
            </div>
          </div>
          {/* Counter block */}
          <div className="counter-block-three col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="inner-box">
              <div className="icon-box"><i className="icon flaticon-container"></i></div>
              <div className="content-box">
                <div className="count-box"><CounterUp count={35} time={3} />+</div>
                <div className="counter-title">Years Of Exprience</div>
              </div>
            </div>
          </div>
          {/* Counter block */}
          <div className="counter-block-three col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-box">
              <div className="icon-box"><i className="icon flaticon-delivery-4"></i></div>
              <div className="content-box">
                <div className="count-box"><CounterUp count={147} time={3} />+</div>
                <div className="counter-title">Countries and Regions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  );
};
export default Funfact3
