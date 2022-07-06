import { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import { Navigation, A11y } from "swiper";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import DemoForm from "./inner/demoform";
import TopProject from "./inner/TopProject";
import Newsletter from "./inner/Newsletter";
import Head from "next/head";
import Review from "./inner/Review";

function Analysis() {
  const [serviceActive, setServiceActive] = useState(1);

  return (
    <>
      <Head>
        <title>Full Stack Web Development Services</title>
        <meta
          name="description"
          content="We provide Non-Fungible Development Services that can help you create NFTs for artworks, digital collectibles, gaming, sports, music, video, content Subscription, etc"
        ></meta>
        <meta
          name="og:description"
          content="We provide Non-Fungible Development Services that can help you create NFTs for artworks, digital collectibles, gaming, sports, music, video, content Subscription, etc"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Full Stack Web Development Services"
        />
        <meta property="og:image" content="assets/img/inner/cr-1.png" />
        <meta property="image" content="assets/img/inner/cr-1.png" />
        <meta
          name="keywords"
          content="nft, full stack, web development, website, website design , website development,development, nft constracter, minting website"
        ></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
      <div id="Analysis" className="cpt-5">
        <div className="decor-balls">
          <img src="assets/imgs/boll-1.png" alt="Ball" />
          <img src="assets/imgs/ball-2.png" alt="Ball" />
          <img src="assets/imgs/ball-3.png" alt="Ball" />
          <img src="assets/imgs/ball-4.png" alt="Ball" />
        </div>
        <div className="container">
          <section className="hero">
            <div
              className="decor-1"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="assets/imgs/decor-1.png" alt="" />
              <img src="assets/img/hero/3.png" alt="" className="decor-2" />
              <img src="assets/img/hero/4.png" alt="" className="decor-3" />
            </div>
            <div
              className="hero-content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1>
                Uncover Vulnerabilities On Your Non-Fungible
                <span> Token Platform</span>
              </h1>

              <p className="raleway-black-16">
                Protecting your systems is a far less daunting task when you
                have a team of cyber experts.
              </p>

              <div className="hero-btns">
                <button className="btn-hero-1">Get Started</button>
                <button className="btn-hero-2">Learn More</button>
              </div>
            </div>

            <div
              className="hero-img"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="assets/imgs/hero-img-3.png" alt="Hero IMG" />

              <div className="charts-container">
                <div className="chart">
                  <div></div>
                </div>
                <div className="chart">
                  <div></div>
                </div>
                <div className="chart">
                  <div></div>
                </div>
                <div className="chart">
                  <div></div>
                </div>
                <div className="chart">
                  <div></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* =============service card section ================== */}
      <section>
        <div className="service-card">
          <div className="container">
            <div className="row-4">
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="" className="service-name">
                      # Reliable Platform
                    </a>
                    <img src="assets/img/inner/timer.svg" alt="" />
                  </div>
                  <p>Most Realiable Developers </p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="" className="service-name">
                      # Project &apos;s Confidentiality
                    </a>
                    <img src="assets/img/inner/doller.svg" alt="" />
                  </div>
                  <p>All of Your Information Is Secure</p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="" className="service-name">
                      # Communicative
                    </a>
                    <img src="assets/img/inner/notice.svg" alt="" />
                  </div>
                  <p>Clients say the team feels like their employees.</p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="" className="service-name">
                      # 24/7 Support
                    </a>
                    <img src="assets/img/inner/vip.svg" alt="" />
                  </div>
                  <p>Our developers are there to support you 24*7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============service card section ================== */}
      <div className="white-bg">
        {/* ================about us section ================== */}
        <section className="about-us cpy-6">
          <div className="container">
            <div className="row-col-2">
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="about-us-img">
                  <img src="assets/img/inner/about-us.png" alt="" />
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="about-us-content">
                  <div className="about-content-inner">
                    <h2>description</h2>
                    <p>
                      Minimize false positives secure your fintech non-fungible
                      token business & systems from cyber threats.With Latest
                      security testing,ensure your business & systems are
                      secure.With free re-testing that finds cyber security
                      weaknesses in your digital infrastructure, to avoid costly
                      data damages & breaches.It is proven that our cyber
                      secuirity experts is your most trusted partner to
                      reproduce vulnerabilities,exploitation probability and
                      actionable recommendations to keep your fintech platform
                      secure from tempting attack of hackers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img src="assets/img/inner/cr-8.png" alt="" className="cr8-img" />
          <img src="assets/img/inner/cr-6.png" alt="" className="cr6-img" />
        </section>
        {/* ================about us section end ================== */}
        {/* ===================demo request section ================== */}
        <div id="demo-sec">
          <DemoForm />
        </div>
        {/* ===================demo request section end ================== */}

        {/* ===================service section ================== */}
        <section>
          <div className="service cpy-6">
            <div className="container">
              <div
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p className="sm-title">OUR NON FUNGIBLE</p>
                <h2 className="sec-title">
                  What NFT Constructer does in a Website Analysis Service?
                </h2>
                <p className="sec-des">
                  At NFT Constructer, we analyze the nature and behavior of each
                  element of the Web pages and search engine’s algorithm, as
                  well as their interactions. As being a purely intellectual
                  process, we deal with the 5 most important areas in this
                  section:
                </p>
              </div>

              <div className="service-grid cpt-7">
                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="service-icon">
                    <img src="assets/img/icon/8.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>Content</h3>
                    <p>
                      Does the language you have used is user-friendly? Does
                      your website have a unique content? Since it is quite
                      important to have a unique content, we do analyze the
                      website content also.
                    </p>
                  </div>
                </div>

                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="service-icon">
                    <img src="assets/img/icon/9.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>SEO</h3>
                    <p>
                      Does your website have the target keywords? Does your
                      website have alt tags on images? How old is your domain?
                      Who is your true competitor and who is partial? There are
                      number of factors which we analyze in this section and
                      recommend the client to apply in their website, Just give
                      a try to our Website Analysis Service now!
                    </p>
                  </div>
                </div>

                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="service-icon">
                    <img src="assets/img/icon/10.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>Technical</h3>
                    <p>
                      How much time is your website taking for loading in search
                      engines? Does your website have the high quality
                      standards? Does your website have the competitive aspects?
                      We analyze all these factors and tell the client what is
                      missing from these technical issues on the website.
                    </p>
                  </div>
                </div>
                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="service-icon">
                    <img src="assets/img/icon/11.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>Design</h3>
                    <p>
                      In order to make a website SEO- friendly we should focus
                      on the website design as well. Does the design deliver the
                      appropriate level of effectiveness, sophistication and
                      accessibility in the market area? We analyze the design
                      responses of both the website and the user.The SEO’s
                      approachable design can ensure royal customers and also
                      excellent brand image of the business.
                    </p>
                  </div>
                </div>
                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="service-icon">
                    <img src="assets/img/icon/12.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>Usability</h3>
                    <p>
                      Can the website visitors find the same information on all
                      the browsers? Does your website help the visitor to
                      properly navigate place-to-place? Does the visitor
                      properly interact with you by using forms or through
                      emails? We analyze such important factors for your
                      website. If a website is leading in the usability factor
                      then it can surpass many other websites in the race of
                      ranking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================service section end ================== */}

        {/* ===================Mentioned section ================== */}
        <section>
          <div
            className="mentioned-area"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="section-title">
              <p className="sm-title">best service</p>
              <h2 className="sec-title">We’ve Been Mentioned In....</h2>
            </div>
            <div className="mentioned-section ">
              <div className="images-slider-1">
                <div className="images-slider-wrapper">
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.jpg" alt="" />
                    <img src="assets/img/inner/logo/2.jpg" alt="" />
                    <img src="assets/img/inner/logo/3.jpg" alt="" />
                    <img src="assets/img/inner/logo/4.jpg" alt="" />
                    <img src="assets/img/inner/logo/5.jpg" alt="" />
                    <img src="assets/img/inner/logo/6.jpg" alt="" />
                    <img src="assets/img/inner/logo/7.jpg" alt="" />
                    <img src="assets/img/inner/logo/8.jpg" alt="" />
                    <img src="assets/img/inner/logo/9.jpg" alt="" />
                    <img src="assets/img/inner/logo/10.jpg" alt="" />
                    <img src="assets/img/inner/logo/11.jpg" alt="" />
                  </div>
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.jpg" alt="" />
                    <img src="assets/img/inner/logo/2.jpg" alt="" />
                    <img src="assets/img/inner/logo/3.jpg" alt="" />
                    <img src="assets/img/inner/logo/4.jpg" alt="" />
                    <img src="assets/img/inner/logo/5.jpg" alt="" />
                    <img src="assets/img/inner/logo/6.jpg" alt="" />
                    <img src="assets/img/inner/logo/7.jpg" alt="" />
                    <img src="assets/img/inner/logo/8.jpg" alt="" />
                    <img src="assets/img/inner/logo/9.jpg" alt="" />
                    <img src="assets/img/inner/logo/10.jpg" alt="" />
                    <img src="assets/img/inner/logo/11.jpg" alt="" />
                  </div>
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.jpg" alt="" />
                    <img src="assets/img/inner/logo/2.jpg" alt="" />
                    <img src="assets/img/inner/logo/3.jpg" alt="" />
                    <img src="assets/img/inner/logo/4.jpg" alt="" />
                    <img src="assets/img/inner/logo/5.jpg" alt="" />
                    <img src="assets/img/inner/logo/6.jpg" alt="" />
                    <img src="assets/img/inner/logo/7.jpg" alt="" />
                    <img src="assets/img/inner/logo/8.jpg" alt="" />
                    <img src="assets/img/inner/logo/9.jpg" alt="" />
                    <img src="assets/img/inner/logo/10.jpg" alt="" />
                    <img src="assets/img/inner/logo/11.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================Mentioned section end ================== */}
        {/* ===================ChainUP section  ================== */}
        <section>
          <div className="chainup-area cpy-6">
            <div className="container">
              <div className="chainup-grid">
                <div
                  className="chainup-img"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src="assets/img/inner/chainup.png" alt="" />
                </div>
                <div
                  className="chainup-content"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="chainup-title">
                    <p>CHAINUP</p>
                    <h2>ChainUP Data Center Worldwide</h2>
                  </div>
                  <div className="chainup-inner-grid">
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img src="assets/img/icon/client.svg" alt="" />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={500} duration={5} /> +
                        </h3>
                        <p>Served Clients</p>
                      </div>
                    </div>

                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img src="assets/img/icon/financial.svg" alt="" />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={60} duration={5} /> +
                        </h3>
                        <p>Financial Detervative Clients</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img src="assets/img/icon/crypto.svg" alt="" />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={100} duration={5} /> +
                        </h3>
                        <p>Wallet Clients</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img src="assets/img/icon/nft.svg" alt="" />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={300} duration={5} /> +
                        </h3>
                        <p>Crypto Exchange Clients</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img src="assets/img/icon/region.svg" alt="" />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={160} duration={5} /> +
                        </h3>
                        <p>Liquidity Service Client</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img src="assets/img/icon/wallet.svg" alt="" />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={20} duration={5} /> +
                        </h3>
                        <p>Countries & Region </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================ChainUP section end ================== */}
        {/* ===================MARKET REPORT section  ================== */}
        <section>
          <div className="market-report-area cpy-6">
            <div className="container">
              <div
                className="section-wrap"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="chainup-title">
                  <p>MARKET REPORT</p>
                  <h2>
                    discover the latest market <br /> trends
                  </h2>
                </div>
              </div>
              <div className="market-report-grid">
                <div
                  className="market-card"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="card-main-content">
                    <div className="market-card-img">
                      <img src="assets/img/icon/card.png" alt="" />
                    </div>
                    <div className="market-card-content">
                      <h3>
                        Yearly NFT Market Report <br /> 2021
                      </h3>
                    </div>
                  </div>
                  <div className="get-btn">
                    <a href="">get the report</a>
                  </div>
                </div>
                <div
                  className="market-card"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="card-main-content">
                    <div className="market-card-img">
                      <img src="assets/img/icon/card.png" alt="" />
                    </div>
                    <div className="market-card-content">
                      <h3>
                        Quarterly NFT Market Report <br /> 2021
                      </h3>
                    </div>
                  </div>
                  <div className="get-btn">
                    <a href="">get the report</a>
                  </div>
                </div>
              </div>
            </div>
            <img src="assets/img/inner/market-1.png" alt="" className="bbl1" />
            <img src="assets/img/inner/market-2.png" alt="" className="bbl2" />
            <img src="assets/img/inner/market-3.png" alt="" className="bbl3" />
            <img src="assets/img/inner/market-4.png" alt="" className="bbl4" />
            <img src="assets/img/inner/market-5.png" alt="" className="bbl5" />
          </div>
        </section>
        {/* ===================MARKET REPORT section end  ================== */}
        {/* ===================Newsletter section  ================== */}
        <Newsletter />
        {/* ===================Newsletter section end ================== */}

        {/* =====================top project===================== */}
        <TopProject />
        {/* ===============top project end=============== */}

        {/* ===================Mentioned section ================== */}
        <section>
          <div
            className="mentioned-area"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="section-title">
              <p className="sm-title">best service</p>
              <h2 className="sec-title">We’ve Worked With</h2>
            </div>
            <div className="mentioned-section ">
              <div className="images-slider-1">
                <div className="images-slider-wrapper">
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.jpg" alt="" />
                    <img src="assets/img/inner/logo/2.jpg" alt="" />
                    <img src="assets/img/inner/logo/3.jpg" alt="" />
                    <img src="assets/img/inner/logo/4.jpg" alt="" />
                    <img src="assets/img/inner/logo/5.jpg" alt="" />
                    <img src="assets/img/inner/logo/6.jpg" alt="" />
                    <img src="assets/img/inner/logo/7.jpg" alt="" />
                    <img src="assets/img/inner/logo/8.jpg" alt="" />
                    <img src="assets/img/inner/logo/9.jpg" alt="" />
                    <img src="assets/img/inner/logo/10.jpg" alt="" />
                    <img src="assets/img/inner/logo/11.jpg" alt="" />
                  </div>
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.jpg" alt="" />
                    <img src="assets/img/inner/logo/2.jpg" alt="" />
                    <img src="assets/img/inner/logo/3.jpg" alt="" />
                    <img src="assets/img/inner/logo/4.jpg" alt="" />
                    <img src="assets/img/inner/logo/5.jpg" alt="" />
                    <img src="assets/img/inner/logo/6.jpg" alt="" />
                    <img src="assets/img/inner/logo/7.jpg" alt="" />
                    <img src="assets/img/inner/logo/8.jpg" alt="" />
                    <img src="assets/img/inner/logo/9.jpg" alt="" />
                    <img src="assets/img/inner/logo/10.jpg" alt="" />
                    <img src="assets/img/inner/logo/11.jpg" alt="" />
                  </div>
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.jpg" alt="" />
                    <img src="assets/img/inner/logo/2.jpg" alt="" />
                    <img src="assets/img/inner/logo/3.jpg" alt="" />
                    <img src="assets/img/inner/logo/4.jpg" alt="" />
                    <img src="assets/img/inner/logo/5.jpg" alt="" />
                    <img src="assets/img/inner/logo/6.jpg" alt="" />
                    <img src="assets/img/inner/logo/7.jpg" alt="" />
                    <img src="assets/img/inner/logo/8.jpg" alt="" />
                    <img src="assets/img/inner/logo/9.jpg" alt="" />
                    <img src="assets/img/inner/logo/10.jpg" alt="" />
                    <img src="assets/img/inner/logo/11.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================Mentioned section end ================== */}

        {/* =====================happy clients======================= */}
        <Review />
        {/* =====================happy clients end======================= */}
        {/* ==========================faq================== */}
        <div
          className="faqs-section cpb-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="section-title">
              <p className="sm-title">Question & Answer</p>
              <h2 className="sec-title">Frequently Asked Questions (FAQ)</h2>
              <p className="sec-des">
                BROWSE OUR FAQ’S BELOW, IF YOU CAN NOT FIND THE ANSWER TO YOU’RE
                LOOKING FOR PLEASE CONTACT US.
              </p>
            </div>

            <div className="content">
              <div className="faq-div">
                <input
                  type="checkbox"
                  id="question1"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question1" className="question">
                    How much does it cost for a complete audit of a NFT
                    website??
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Our quotes and turnaround times vary according to the
                    codebase’s length and complexity.
                  </p>
                </div>
              </div>
              <div className="faq-div">
                <input
                  type="checkbox"
                  id="question5"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question5" className="question">
                    Is it completely safe??
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    We provide confidential initial reports, web hosted public
                    final certificates for easy sharing with stakeholders, and
                    also formally written letters for compliance departments to
                    confirm the results of a security audit.
                  </p>
                </div>
              </div>
              <div className="faq-div">
                <input
                  type="checkbox"
                  id="question2"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question2" className="question">
                    What is your audit process?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Organize a kick-off meeting and provide a quote then we
                    privately send your team a detailed audit report.After your
                    team fixes the issues and best practices then we will you an
                    updated audit report and certificate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ==========================faq end================== */}
      </div>
    </>
  );
}

Analysis.layout = AppLayout;

export default Analysis;
