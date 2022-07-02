import AppLayout from "../component/Layout/Layout";
function Error() {
  return (
    <>
      <div className="error">
        <div className="container">
          <section className="section-404">
            <img src="assets/imgs/404.png" alt="404" />
            <p className="urbanist-black-56">Page Not Found!</p>
            <p className="raleway-grey-16">
              Oops! The page you are looking for does not exist. It might have
              been moved or deleted.
            </p>
            <button className="back-home">Navigate Back Home</button>
          </section>
        </div>
      </div>
    </>
  );
}

Error.title = "Full Stack Web Development Services";
Error.image = "assets/img/hero/webdevlopment.gif";
Error.keywords =
  "nft, full stack, web development, website, website design , website development,development, nft constracter, minting website";
Error.description =
  "We provide Non-Fungible Development Services that can help you create NFTs for artworks, digital collectibles, gaming, sports, music, video, content Subscription, etc";

Error.layout = AppLayout;

export default Error;
