import AppLayout from "../component/Layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import React, { useEffect, useState } from "react";
import Head from "next/head";

function Portfolio() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("https://admin.nftconstructer.com/api/portfolio")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPortfolio(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
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
      <div className="portfolio-banner">
        <div id="home1">
          <section className="hero">
            <div className="container">
              <div className="hero-wrapper">
                <div
                  className="hero-content-wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="hero-content">
                    <div className="title-top-img">
                      <img src="assets/img/inner/cr-1.png" alt="" />
                    </div>
                    <div className="widht-60">
                      <h1 className="title hero-title">
                        Building Digital Products, brands experience
                      </h1>
                    </div>
                    <div className="widht-50">
                      <p className="description">
                        We provide Non-Fungible Development Services that can
                        help you create NFTs for artworks, digital collectibles,
                        gaming, sports, music, video, content Subscription, etc.
                      </p>
                    </div>
                    <div className="input-box widht-40 ">
                      <div className="input-area">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type your email here"
                        />
                        <div className="icon">
                          <i className="icofont-envelope"></i>
                        </div>
                        <div className="btn">
                          <button className="singup-btn">Sign Up</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="hero-img"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img src="assets/img/hero/portfolio.png" alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="tak-logo" data-aos="fade-up" data-aos-duration="1000">
          <div className="container">
            <div className="hero-bottom">
              <div className="row-4">
                <div className="logo-item">
                  <img src="assets/img/logo/google.png" alt="" />
                </div>
                <div className="logo-item">
                  <img src="assets/img/logo/slack.png" alt="" />
                </div>
                <div className="logo-item">
                  <img src="assets/img/logo/monday.png" alt="" />
                </div>
                <div className="logo-item">
                  <img src="assets/img/logo/microsoft.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="light-bg">
        <div className="portfolio-area">
          <div className="container">
            <div className="section-title cpy-5">
              <p className="sm-title">best services</p>
              <h2 className="sec-title">My Portfolio</h2>
              <p className="sec-des">
                Get more software development information about exchange
                software wallet software derivate products and ETC
              </p>
            </div>
            <div className="portfolio-item">
              <div className="grid-2">
                {portfolio.map((portfolio, index) => (
                  <div
                    className={
                      index % 2
                        ? "prof-item cg-direction cpy-5"
                        : "prof-item cpy-5"
                    }
                    key={index}
                  >
                    <div
                      className="prof-des"
                      data-aos={index % 2 ? "fade-left" : "fade-right"}
                      data-aos-duration="1500"
                    >
                      <h3 className="prof-title">{portfolio.name}</h3>
                      <p className="prof-text">{portfolio.description}</p>
                      <a href={portfolio.link} className="view-shot">
                        Visit Live Site
                        <img src="assets/img/long-arrow-right.svg" alt="" />
                      </a>
                    </div>
                    <div
                      className="prof-img prof-right-img"
                      data-aos={index % 2 ? "fade-right" : "fade-left"}
                      data-aos-duration="1500"
                    >
                      <img src={portfolio.image} alt={portfolio.name} />
                      <div
                        className={index % 2 ? "prof-right" : "prof-left"}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================happy clients======================= */}
        <section>
          <div className="happy-area cpy-6">
            <div className="container">
              <div
                className="section-wrap"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="chainup-title">
                  <p>Happy clients</p>
                  <h2>What Our Client Say’s</h2>
                </div>
                <p>
                  This is what clients have been saying after using the <br />
                  great service we do for clients.
                </p>
              </div>

              <div
                className="client-review"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                  }}
                  loop="true"
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <div className="client-review-slider">
                      <div className="review-img">
                        <img src="assets/img/inner/review.png" alt="" />
                      </div>
                      <div className="review-content">
                        <h2 className="content-title">
                          Save time managing social media for your business
                        </h2>
                        <p>
                          “This is by far the simplest, most frictionless,
                          easiest-to-get-going platform that I’ve ever worked
                          in. Just being able to upload a link and bounce”
                        </p>
                        <div className="rating">
                          <ul className="rating-ul">
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                          </ul>
                        </div>

                        <div className="client-info">
                          <div className="client-img">
                            <img src="assets/img/inner/client.png" alt="" />
                          </div>
                          <div className="client-name">
                            <h3>Branun Yes </h3>
                            <p>CEO of Arcane</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="client-review-slider">
                      <div className="review-img">
                        <img src="assets/img/inner/review.png" alt="" />
                      </div>
                      <div className="review-content">
                        <h2 className="content-title">
                          Save time managing social media for your business
                        </h2>
                        <p>
                          “This is by far the simplest, most frictionless,
                          easiest-to-get-going platform that I’ve ever worked
                          in. Just being able to upload a link and bounce”
                        </p>
                        <div className="rating">
                          <ul className="rating-ul">
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                          </ul>
                        </div>

                        <div className="client-info">
                          <div className="client-img">
                            <img src="assets/img/inner/client.png" alt="" />
                          </div>
                          <div className="client-name">
                            <h3>Branun Yes </h3>
                            <p>CEO of Arcane</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="slider-nav">
                  <div className="prev">
                    <i className="icofont-arrow-left"></i>
                  </div>
                  <div className="next">
                    <i className="icofont-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =====================happy clients end======================= */}
      </div>
    </>
  );
}

Portfolio.title = "Full Stack Web Development Services";
Portfolio.image = "assets/img/hero/webdevlopment.gif";
Portfolio.keywords =
  "nft, full stack, web development, website, website design , website development,development, nft constracter, minting website";
Portfolio.description =
  "We provide Non-Fungible Development Services that can help you create NFTs for artworks, digital collectibles, gaming, sports, music, video, content Subscription, etc";

Portfolio.layout = AppLayout;

export default Portfolio;
