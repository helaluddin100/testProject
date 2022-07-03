import React, { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import Link from "next/link";
function Blog() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://admin.nftconstructer.com/api/blog")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPosts(result);
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
      <div id="blog" className="cpy-6">
        <section>
          <div className="container">
            <div className="section-title">
              <p className="sm-title">My Blog</p>
              <h2 className="sec-title">Latest News</h2>
              <p className="sec-des">
                Get more software development information about exchange
                software wallet software derivate products and ETC
              </p>
            </div>

            <div className="blog-container">
              {posts.map((post, index) => (
                <div className="blog-post" key={index}>
                  <div className="blog-img">
                    <img src={post.main_image} alt="Blog" />
                  </div>
                  <div className="about-blog">
                    <Link href={"/inner/" + post.id}>
                      <a className="urbanist-black-18">
                        {post.title.substring(0, 20)}
                      </a>
                    </Link>
                    <p className="raleway-grey-16">{post.created_date}</p>
                    <p
                      className="sm-des"
                      dangerouslySetInnerHTML={{
                        __html: post.description.substring(0, 100),
                      }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

Blog.layout = AppLayout;

export default Blog;
