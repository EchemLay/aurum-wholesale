import React, { useState } from 'react';
const Tab3 = () => {
  
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
      setActiveIndex(index); // remove the curly braces
  };
    return (
        <>
        <section className="about-section-six">
          <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/7.jpg)' }}></div>
          <div className="auto-container">
            <div className="sec-title light">
              <span className="sub-title">Top Level Company</span>
              <h2>Providing Innovative <br/>Web Solutions for Future</h2>
            </div>

            <div className="default-tabs tabs-box">
              <ul className="tab-buttons clearfix">
                <li className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)} data-tab="#tab1"><span className="title">Our Missions</span></li>
                <li className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)} data-tab="#tab2"><span className="title">Our Visions</span></li>
                <li className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)} data-tab="#tab3"><span className="title">Our History</span></li>
              </ul>

              <div className="tabs-content">
                <div className={activeIndex === 1 ? "tab active-tab" : "tab"} id="tab1">
                  <div className="about-block">
                    <div className="inner-box">
                      <div className="list-outer">
                        <ul className="list-style-three">
                          <li>Nsectetur cing elit</li>
                          <li>Suspe ndisse suscip sagittis leo</li>
                          <li>Entum estib dignissim posuere</li>
                          <li>If you are going to use a pass</li>
                        </ul>
                      </div>
                      <div className="text">There are many variations of passages of available but majority alteration in some form, by humou or randomised words.</div>
                      <figure className="image"><img src="/images/resource/small-img-3.jpg" alt=""/></figure>
                    </div>
                  </div>
                </div>

                <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="tab2">
                  <div className="about-block">
                    <div className="inner-box">
                      <div className="list-outer">
                        <ul className="list-style-three">
                          <li>Nsectetur cing elit</li>
                          <li>Suspe ndisse suscip sagittis leo</li>
                          <li>Entum estib dignissim posuere</li>
                          <li>If you are going to use a pass</li>
                        </ul>
                      </div>
                      <div className="text">There are many variations of passages of available but majority alteration in some form, by
                        humou or randomised words.</div>
                      <figure className="image"><img src="/images/resource/small-img-3.jpg" alt=""/></figure>
                    </div>
                  </div>
                </div>

                <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="tab3">
                  <div className="about-block">
                    <div className="inner-box">
                      <div className="list-outer">
                        <ul className="list-style-three">
                          <li>Nsectetur cing elit</li>
                          <li>Suspe ndisse suscip sagittis leo</li>
                          <li>Entum estib dignissim posuere</li>
                          <li>If you are going to use a pass</li>
                        </ul>
                      </div>
                      <div className="text">There are many variations of passages of available but majority alteration in some form, by
                        humou or randomised words.</div>
                      <figure className="image"><img src="/images/resource/small-img-3.jpg" alt=""/></figure>
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
export default Tab3
