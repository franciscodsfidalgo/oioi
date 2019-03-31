import Head from "next/head";


const Layout_nopostbar = props => (
  <div className="nono"> 
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Lancfessions</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/united/bootstrap.min.css"
      />
    </Head>
    <div >{props.children}</div>
    <style jsx global>{`
      p {
        color: #353535;
        margin-bottom: 0;
      }

      a {
        color: #595959;
      }

      name {
        height: 100%; 
      }

      #__next {
        height: 100%;
      }

      .nono {
        height: 100%; 
        display: -webkit-flex;
        align-self: stretch;
        justify-content: center;
      }

      body {
        height: 100%; 
      }

      .customFlex {
        flex: 1;
      }
    `}</style>
  </div>
);


export default Layout_nopostbar;
