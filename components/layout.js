import Head from "next/head";
import Navbar from "./navbar";
// import InputBar from "./inputBar";
import PostBar from "./postBar";

const Layout = props => (
  <div className="post-container">
    <Navbar />
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Lancfessions</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/united/bootstrap.min.css"
      />
    </Head>
    <div>{props.children}</div>
    <PostBar />
    <style jsx global>{`
      .rootPage {
        background-color: black;
      }
      .post-container {
        background-color: #777;
      }

      p {
        color: #353535;
      }

      a {
        color: #595959;
      }

      body {
        padding-top: 50px;
        padding-bottom: 40px;
        color: #000;
      }

      .customFlex {
        flex: 1;
      }
    `}</style>
  </div>
);

export default Layout;
