import Head from "next/head";
import AppLayout from "../component/Layout/Layout";
import axios from "axios";
import Contract from "./inner/Contract";
function ContractPage() {
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
      <div className="contract-wrapper">
        <Contract />
      </div>
    </>
  );
}

ContractPage.layout = AppLayout;

export default ContractPage;
