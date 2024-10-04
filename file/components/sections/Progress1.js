import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Progress1 = () => {
    return (
        <>
        <section className="about-section-two pt-0">
            <div className="icon-boxes"></div>
            <div className="auto-container">
            <div className="outer-box">
                <div className="row">
                <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                    <div className="inner-column">
                    <div className="sec-title">
                        <div className="sub-title-outer"> <span className="sub-title">We are Commited</span>
                        <h2 className="scrub-each-word text-split">Connect Your <br/>
                            Business to world</h2>
                        </div>
                    </div>
                    <div className="row"> 
                        <div className="image-box col-lg-4 col-md-4 col-sm-4">
                        <div className="inner">
                            <figure className="image overlay-anim"><img src="images/resource/about2-1.jpg" alt="Image"/></figure>
                        </div>
                        </div>
                        <div className="blocks-column col-lg-8 col-md-8 col-sm-8">
                        <div className="inner-column"> 
                            <div className="about-block">
                            <div className="inner-box"> <i className="icon flaticon-container"></i>
                                <div className="content">
                                <h5 className="title">Supply Solution</h5>
                                <div className="text">With over four decades of experience providing solutions</div>
                                </div>
                            </div>
                            </div>
                            <div className="about-block">
                            <div className="inner-box"> <i className="icon flaticon-international-shipping-1"></i>
                                <div className="content">
                                <h5 className="title">Connect Business</h5>
                                <div className="text">With over four decades of experience providing solutions</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className="skills-column col-lg-6 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
                    <div className="inner-column">
                    <h6 className="title">Our priority is to deliver value to our clients by providing exceptional wholesale products and services.</h6>
                    <div className="text">We understand that every business has unique needs, and we are dedicated to meeting those requirements efficiently and reliably.</div>
                    <div className="skills"> 
                        <div className="skill-item">
                        <div className="skill-header">
                            <div className="skill-title">Shipping</div>
                        </div>
                        <div className="skill-bar">
                            <div className="bar-inner">
                            <div className="bar progress-line" style={{width:"80%"}}>
                                <div className="skill-percentage">
                                <div className="count-box"><CounterUp count={80} time={3} />%</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="skill-item">
                        <div className="skill-header">
                            <div className="skill-title">Management</div>
                        </div>
                        <div className="skill-bar">
                            <div className="bar-inner">
                            <div className="bar progress-line" style={{width:"90%"}}>
                                <div className="skill-percentage">
                                <div className="count-box"><CounterUp count={90} time={3} />%</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="skill-item">
                        <div className="skill-header">
                            <div className="skill-title">Support</div>
                        </div>
                        <div className="skill-bar">
                            <div className="bar-inner">
                            <div className="bar progress-line" style={{width:"90%"}}>
                                <div className="skill-percentage">
                                <div className="count-box"><CounterUp count={90} time={3} />%</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
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
export default Progress1
