import Link from "next/link"
const Process2 = () => {
    return (
        <>
            <section className="process-section">
                <div className="icon-plane-9 bounce-y"></div>
                <div className="bg-map-4"></div>
                <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">How it works</span>
                    <h2 className="scrub-each-word text-split">3 Easy Steps to task</h2>
                </div>
                <div className="row"> 
                    <div className="process-block col-lg-4 col-md-6 wow fadeInUp">
                    <div className="inner-box">
                        <div className="icon-blur"></div>
                        <i className="icon flaticon-order"></i>
                        <div className="count">01</div>
                        <div className="content">
                        <h4 className="title">Enter Your <br/> & Product Details</h4>
                        </div>
                    </div>
                    </div>
                    <div className="process-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                    <div className="inner-box">
                        <div className="icon-blur"></div>
                        <i className="icon flaticon-parcel"></i>
                        <div className="count">02</div>
                        <div className="content">
                        <h4 className="title">Pay Your Service <br/> Charges</h4>
                        </div>
                    </div>
                    </div>
                    <div className="process-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                    <div className="inner-box">
                        <div className="icon-blur"></div>
                        <i className="icon flaticon-24-hours-delivery"></i>
                        <div className="count">03</div>
                        <div className="content">
                        <h4 className="title">Ready to Send <br/> Your Goods</h4>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="btn-box text-center"> <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore More <i className="fa fa-long-arrow-right"></i></span></Link> </div>
                </div>
            </section>
        </>
    );
};
export default Process2
