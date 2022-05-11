import { render } from "react-dom";
import { App } from "./components/App";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const rootElement = document.getElementById("root");
render(
    <HelmetProvider>
      <Helmet>
        <title>ZebraWolf</title>
        <meta name="description" content="ZebraWolf | Haru(Baru)'s portfolio site." />
        <link rel="canonical" href="https://www.zebrawolf.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://www.zebrawolf.com/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <script src="https://www.zebrawolf.com/js/analytics.js"></script>
      </Helmet>
        <App />
    </HelmetProvider>
, rootElement);